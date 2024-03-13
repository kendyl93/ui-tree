import { useNodes } from "./hooks/useNodes";

export default function Home() {
  const jsxTags = useNodes();

  return (
    <main style={{ width: "500px", height: "500px" }}>
      <ul>
        <li>TEST</li>
      </ul>
      <div>{jsxTags}</div>
      {/* <div style={{ width: "500px", height: "500px" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div> */}
    </main>
  );
}
