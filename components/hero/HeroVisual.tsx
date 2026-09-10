import dynamic from "next/dynamic";
import HeroFallback from "./scene/HeroFallback";
import SceneErrorBoundary from "./scene/SceneErrorBoundary";
import styles from "./style.module.scss";

const HeroScene = dynamic(() => import("./scene/HeroScene"), {
  ssr: false,
  loading: () => null,
});

type HeroVisualProps = {
  reducedMotion?: boolean;
  isMobile?: boolean;
};

const HeroVisual: React.FC<HeroVisualProps> = ({ reducedMotion = false, isMobile = false }) => {
  return (
    <div id="hero-visual" className={styles.visual} aria-hidden="true">
      <HeroFallback />
      <SceneErrorBoundary fallback={null}>
        <HeroScene reducedMotion={reducedMotion} isMobile={isMobile} />
      </SceneErrorBoundary>
    </div>
  );
};

export default HeroVisual;
