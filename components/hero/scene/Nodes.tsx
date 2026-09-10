import { useMemo } from "react";
import { BufferAttribute, BufferGeometry, Color, Vector3 } from "three";

type NodesProps = {
  count: number;
  radius: number;
  nodeColor: string;
  lineColor: string;
};

function fibonacciSphere(count: number, radius: number) {
  const points: Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push(new Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }

  return points;
}

const Nodes: React.FC<NodesProps> = ({ count, radius, nodeColor, lineColor }) => {
  const points = useMemo(() => fibonacciSphere(count, radius), [count, radius]);

  const lineGeometry = useMemo(() => {
    const positions = new Float32Array(count * 6);
    points.forEach((point, index) => {
      const offset = index * 6;
      positions[offset] = 0;
      positions[offset + 1] = 0;
      positions[offset + 2] = 0;
      positions[offset + 3] = point.x;
      positions[offset + 4] = point.y;
      positions[offset + 5] = point.z;
    });

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(positions, 3));
    return geometry;
  }, [count, points]);

  const nodeTone = useMemo(() => new Color(nodeColor), [nodeColor]);
  const linkTone = useMemo(() => new Color(lineColor), [lineColor]);

  return (
    <group>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={linkTone} transparent opacity={0.28} depthWrite={false} />
      </lineSegments>
      {points.map((point) => (
        <mesh key={`${point.x.toFixed(3)}-${point.y.toFixed(3)}`} position={point}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshBasicMaterial color={nodeTone} transparent opacity={0.88} />
        </mesh>
      ))}
    </group>
  );
};

export default Nodes;
