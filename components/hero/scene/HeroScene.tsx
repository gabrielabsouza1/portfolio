import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import DigitalCore from "./DigitalCore";
import styles from "../style.module.scss";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

type HeroSceneProps = {
  reducedMotion: boolean;
  isMobile: boolean;
};

const HeroScene: React.FC<HeroSceneProps> = ({ reducedMotion, isMobile }) => {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = document.getElementById("hero-visual");
    if (!node || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!supportsWebGL()) {
    return null;
  }

  const frameloop = !inView ? "never" : reducedMotion ? "demand" : "always";

  return (
    <div className={styles.canvasLayer}>
      <Canvas
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: isMobile ? "low-power" : "high-performance",
          stencil: false,
        }}
        dpr={isMobile ? 1 : [1, 1.5]}
        camera={{ position: [0, 0.12, 4.35], fov: 36, near: 0.1, far: 20 }}
        frameloop={frameloop}
        style={{ pointerEvents: "none", background: "transparent" }}
        onCreated={({ gl, invalidate }) => {
          gl.setClearColor(0x000000, 0);
          gl.outputColorSpace = SRGBColorSpace;
          gl.toneMapping = ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
          invalidate();
        }}
      >
        <ambientLight intensity={0.28} />
        <directionalLight position={[2.4, 2.2, 3]} intensity={0.55} color="#f5f5f7" />
        <pointLight position={[0, 0, 0.2]} intensity={1.15} color="#eb176b" distance={4.5} decay={2} />
        <pointLight position={[-2.2, -1.2, 1.4]} intensity={0.28} color="#7226d1" distance={6} />
        <DigitalCore reducedMotion={reducedMotion} isMobile={isMobile} />
        {!isMobile && !reducedMotion ? <AdaptiveDpr pixelated={false} /> : null}
      </Canvas>
    </div>
  );
};

export default HeroScene;
