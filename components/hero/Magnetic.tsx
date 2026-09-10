"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

type MagneticProps = {
  children: React.ReactNode;
  disabled?: boolean;
  strength?: number;
};

const Magnetic: React.FC<MagneticProps> = ({ children, disabled = false, strength = 10 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || disabled) {
      return undefined;
    }

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;
      const distance = Math.hypot(relX, relY);
      const radius = Math.max(rect.width, rect.height) * 1.15;

      if (distance > radius) {
        node.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const pull = 1 - distance / radius;
      node.style.transform = `translate3d(${(relX / rect.width) * strength * pull}px, ${(relY / rect.height) * strength * pull}px, 0)`;
    };

    const onLeave = () => {
      node.style.transform = "translate3d(0, 0, 0)";
    };

    window.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      node.style.transform = "translate3d(0, 0, 0)";
    };
  }, [disabled, strength]);

  return (
    <div ref={ref} className={styles.magnetic}>
      {children}
    </div>
  );
};

export default Magnetic;
