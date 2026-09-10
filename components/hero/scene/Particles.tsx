import { useMemo } from "react";
import { BufferAttribute, BufferGeometry, Color } from "three";

type ParticlesProps = {
  count: number;
  radius: number;
  color: string;
};

function unit(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

const Particles: React.FC<ParticlesProps> = ({ count, radius, color }) => {
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const theta = Math.acos(2 * unit(i + 1) - 1);
      const phi = unit(i + 17) * Math.PI * 2;
      const r = radius * (0.72 + unit(i + 41) * 0.45);
      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);
    }

    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    return geo;
  }, [count, radius]);

  const particleColor = useMemo(() => new Color(color), [color]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        color={particleColor}
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.42}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
