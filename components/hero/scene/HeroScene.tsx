import { memo, Suspense, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import { Clump, Pointer } from "./ObjectClump";
import styles from "../style.module.scss";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

const LAYOUTS = {
  phone: { center: [0, -2.45, 0] as [number, number, number], radius: 0.62, cameraZ: 18 },
  stacked: { center: [0, -2.2, 0] as [number, number, number], radius: 0.7, cameraZ: 19 },
  compact: { center: [2.05, 0.28, 0] as [number, number, number], radius: 0.58, cameraZ: 20 },
  mid: { center: [2.35, 0.32, 0] as [number, number, number], radius: 0.64, cameraZ: 20 },
  laptop: { center: [2.55, 0.36, 0] as [number, number, number], radius: 0.8, cameraZ: 20 },
  wide: { center: [3.05, 0.4, 0] as [number, number, number], radius: 1.06, cameraZ: 20 },
  ultra: { center: [3.4, 0.42, 0] as [number, number, number], radius: 1.16, cameraZ: 20 },
};

function getClumpLayout(width: number) {
  if (width < 550) {
    return LAYOUTS.phone;
  }
  if (width < 1001) {
    return LAYOUTS.stacked;
  }
  if (width < 1200) {
    return LAYOUTS.compact;
  }
  if (width < 1300) {
    return LAYOUTS.mid;
  }
  if (width < 1500) {
    return LAYOUTS.laptop;
  }
  if (width < 1720) {
    return LAYOUTS.wide;
  }
  return LAYOUTS.ultra;
}

function useViewportWidth() {
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

type HeroSceneProps = {
  reducedMotion: boolean;
  isMobile: boolean;
};

const camera = { position: [0, 0, 20] as [number, number, number], fov: 35, near: 1, far: 40 };

function CameraDistance({ z }: { z: number }) {
  const camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    camera.position.z = z;
    camera.updateProjectionMatrix();
  }, [camera, z]);

  return null;
}

const HeroScene: React.FC<HeroSceneProps> = ({ reducedMotion, isMobile }) => {
  const [inView, setInView] = useState(true);
  const width = useViewportWidth();
  const { center, radius, cameraZ } = useMemo(() => getClumpLayout(width), [width]);

  useEffect(() => {
    const node = document.getElementById("hero-visual");
    if (!node || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "120px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!supportsWebGL()) {
    return null;
  }

  const paused = reducedMotion || !inView;

  return (
    <div className={styles.canvasLayer}>
      <Canvas
        shadows
        gl={{
          alpha: false,
          antialias: !isMobile,
          powerPreference: isMobile ? "low-power" : "high-performance",
          stencil: false,
        }}
        dpr={isMobile ? 1 : [1, 1.5]}
        camera={camera}
        frameloop={paused ? "never" : "always"}
        style={{ background: "#0d0b10", touchAction: "pan-y" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x0d0b10, 1);
          gl.outputColorSpace = SRGBColorSpace;
          gl.toneMapping = ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
        }}
      >
        <color attach="background" args={["#0d0b10"]} />
        <CameraDistance z={cameraZ} />
        <ambientLight intensity={0.5 * Math.PI} />
        <spotLight
          intensity={Math.PI}
          decay={0}
          angle={0.2}
          penumbra={1}
          position={[30, 30, 30]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <Suspense fallback={null}>
          <Physics gravity={[0, 2, 0]} iterations={10} isPaused={paused} shouldInvalidate={false}>
            <Pointer enabled={!paused} radius={radius} />
            <Clump center={center} radius={radius} reducedMotion={reducedMotion} />
          </Physics>
          <Environment files="/hero/adamsbridge.hdr" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default memo(HeroScene);
