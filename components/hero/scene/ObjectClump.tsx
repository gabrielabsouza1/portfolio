import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Color, InstancedMesh, Matrix4, MeshStandardMaterial, SphereGeometry, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";

const rfs = (range: number) => (Math.random() - 0.5) * range;
const baubleMaterial = new MeshStandardMaterial({
  color: "white",
  roughness: 0,
  envMapIntensity: 1,
});

const COUNT = 40;
const FORCE = -40;

export const BAUBLE_COLORS = [
  "#f5f5f7",
  "#ff5d9a",
  "#e8e8ed",
  "#c4b5fd",
  "#ff7eb3",
  "#f5f5f7",
  "#a78bfa",
  "#ff5d9a",
] as const;

type ClumpProps = {
  center: [number, number, number];
  radius: number;
  reducedMotion: boolean;
};

export const Clump: React.FC<ClumpProps> = ({ center, radius, reducedMotion }) => {
  const mat = useMemo(() => new Matrix4(), []);
  const vec = useMemo(() => new Vector3(), []);
  const tint = useMemo(() => new Color(), []);
  const origin = useMemo(() => new Vector3(...center), [center]);
  const geometry = useMemo(() => {
    const next = new SphereGeometry(radius, 32, 32);
    return next;
  }, [radius]);

  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);
  const texture = useTexture("/hero/cross.jpg");
  const spread = reducedMotion ? 2.8 : 20;

  const [ref, api] = useSphere<InstancedMesh>(
    () => ({
      args: [radius],
      mass: 1,
      angularDamping: 0.1,
      linearDamping: 0.65,
      position: [origin.x + rfs(spread), origin.y + rfs(spread), origin.z + rfs(spread)],
    }),
    undefined,
    [origin.x, origin.y, origin.z, spread, radius]
  );

  useLayoutEffect(() => {
    const mesh = ref.current;
    if (!mesh) {
      return;
    }

    for (let i = 0; i < COUNT; i += 1) {
      mesh.setColorAt(i, tint.set(BAUBLE_COLORS[i % BAUBLE_COLORS.length]));
    }
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }
  }, [radius, ref, tint]);

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) {
      return;
    }

    for (let i = 0; i < COUNT; i += 1) {
      mesh.getMatrixAt(i, mat);
      vec.setFromMatrixPosition(mat).sub(origin);
      if (vec.lengthSq() < 0.0001) {
        continue;
      }
      const force = vec.normalize().multiplyScalar(FORCE);
      api.at(i).applyForce([force.x, force.y, force.z], [0, 0, 0]);
    }
  });

  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[geometry, baubleMaterial, COUNT]}
      material-map={texture}
    />
  );
};

type PointerProps = {
  enabled: boolean;
  radius: number;
};

export const Pointer: React.FC<PointerProps> = ({ enabled, radius }) => {
  const viewport = useThree((state) => state.viewport);
  const gl = useThree((state) => state.gl);
  const over = useRef(false);
  const pointerRadius = radius * 3;
  const [, api] = useSphere(
    () => ({
      type: "Kinematic",
      args: [pointerRadius],
      position: [0, 0, 40],
    }),
    undefined,
    [pointerRadius]
  );

  useEffect(() => {
    const canvas = gl.domElement;
    const onEnter = () => {
      over.current = true;
    };
    const onLeave = () => {
      over.current = false;
    };
    canvas.addEventListener("pointerenter", onEnter);
    canvas.addEventListener("pointerleave", onLeave);
    return () => {
      canvas.removeEventListener("pointerenter", onEnter);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [gl]);

  useFrame((state) => {
    if (!enabled || !over.current) {
      api.position.set(0, 0, 40);
      return;
    }

    api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0);
  });

  return null;
};
