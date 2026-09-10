import { Mesh, type Group } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type OrbitProps = {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  color: string;
  reducedMotion: boolean;
  segments: number;
};

const Orbit: React.FC<OrbitProps> = ({
  radius,
  rotation,
  speed,
  color,
  reducedMotion,
  segments,
}) => {
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (reducedMotion || !ref.current) {
      return;
    }
    ref.current.rotation.z += delta * speed;
  });

  return (
    <group ref={ref} rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, 0.007, 6, segments]} />
        <meshBasicMaterial color={color} transparent opacity={0.34} depthWrite={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.012, radius + 0.012, segments]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} depthWrite={false} />
      </mesh>
    </group>
  );
};

export const CorePulse: React.FC<{ reducedMotion: boolean; color: string }> = ({
  reducedMotion,
  color,
}) => {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) {
      return;
    }
    const pulse = reducedMotion ? 1 : 1 + Math.sin(clock.elapsedTime * 1.4) * 0.035;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.42, 32, 32]} />
      <meshStandardMaterial
        color="#121216"
        emissive={color}
        emissiveIntensity={0.45}
        roughness={0.28}
        metalness={0.72}
        transparent
        opacity={0.96}
      />
    </mesh>
  );
};

export default Orbit;
