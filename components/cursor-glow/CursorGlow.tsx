import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useIsMobile } from "hooks/useIsMobile";
import styles from "./style.module.scss";

const CursorGlow: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile(1000);
  const glowRef = useRef<HTMLDivElement>(null);
  const enabled = !reduceMotion && !isMobile;

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const position = { x: 0, y: 0, tx: 0, ty: 0, visible: false };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      position.tx = event.clientX;
      position.ty = event.clientY;
      position.visible = true;
    };

    const onLeave = () => {
      position.visible = false;
    };

    const tick = () => {
      position.x += (position.tx - position.x) * 0.16;
      position.y += (position.ty - position.y) * 0.16;
      const node = glowRef.current;
      if (node) {
        node.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`;
        node.style.opacity = position.visible ? "1" : "0";
      }
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return <div ref={glowRef} className={styles.glow} aria-hidden="true" />;
};

export default CursorGlow;
