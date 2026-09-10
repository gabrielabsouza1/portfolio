import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, MathUtils } from "three";
import { heroPointer } from "./pointerStore";
import Orbit, { CorePulse } from "./Orbit";
import Nodes from "./Nodes";
import Particles from "./Particles";

type DigitalCoreProps = {
  reducedMotion: boolean;
  isMobile: boolean;
};

const ACCENT = "#eb176b";
const ACCENT_SOFT = "#ff5d9a";
const PURPLE = "#7226d1";
const SILVER = "#d4d4d8";

const DigitalCore: React.FC<DigitalCoreProps> = ({ reducedMotion, isMobile }) => {
  const group = useRef<Group>(null);
  const tilt = useRef({ x: 0, y: 0 });
  const idleY = useRef(0);
  const nodeCount = isMobile ? 7 : 11;
  const particleCount = isMobile ? 42 : 96;
  const ringSegments = isMobile ? 48 : 96;
  const wireDetail = isMobile ? 0 : 1;

  const wireArgs = useMemo(() => [0.78, wireDetail] as [number, number], [wireDetail]);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    const pointerScale = reducedMotion || isMobile ? 0 : 1;
    tilt.current.x = MathUtils.lerp(tilt.current.x, heroPointer.y * 0.22 * pointerScale, 0.045);
    tilt.current.y = MathUtils.lerp(tilt.current.y, heroPointer.x * 0.32 * pointerScale, 0.045);
    idleY.current += reducedMotion ? 0 : delta * 0.16;

    group.current.rotation.y = idleY.current + tilt.current.y;
    group.current.rotation.x = tilt.current.x + (reducedMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.7) * 0.04);
    group.current.rotation.z = MathUtils.lerp(
      group.current.rotation.z,
      heroPointer.scroll * 0.12 * (reducedMotion ? 0 : 1),
      0.04
    );
    group.current.position.y = reducedMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.9) * 0.07;
  });

  return (
    <group ref={group}>
      <CorePulse reducedMotion={reducedMotion} color={ACCENT} />

      <mesh>
        <icosahedronGeometry args={wireArgs} />
        <meshBasicMaterial color={SILVER} wireframe transparent opacity={0.22} />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[0.58, 0]} />
        <meshBasicMaterial color={ACCENT_SOFT} wireframe transparent opacity={0.16} />
      </mesh>

      <Orbit
        radius={1.18}
        rotation={[Math.PI / 2.4, 0.2, 0.15]}
        speed={0.18}
        color={ACCENT_SOFT}
        reducedMotion={reducedMotion}
        segments={ringSegments}
      />
      <Orbit
        radius={1.42}
        rotation={[0.35, Math.PI / 3.2, 0.4]}
        speed={-0.12}
        color={PURPLE}
        reducedMotion={reducedMotion}
        segments={ringSegments}
      />
      <Orbit
        radius={1.66}
        rotation={[1.15, -0.4, 0.7]}
        speed={0.08}
        color={SILVER}
        reducedMotion={reducedMotion}
        segments={Math.max(32, ringSegments - 16)}
      />

      <Nodes count={nodeCount} radius={1.28} nodeColor={SILVER} lineColor={ACCENT} />
      <Particles count={particleCount} radius={1.85} color={SILVER} />
    </group>
  );
};

export default DigitalCore;
