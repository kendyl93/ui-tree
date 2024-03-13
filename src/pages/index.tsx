import { useState } from "react";
import { CopyBlock } from "react-code-blocks";
import { useNodes } from "./hooks/useNodes";

export default function Home() {
  const [activeTag, setActiveTag] = useState<any>(null);
  const handleTagClick = async (e: any, tag?: any) => {
    if(!tag){
      return;
    }
    setActiveTag({ innerHTML: tag.innerHTML, outerHTML: tag.outerHTML });
  };
  const jsxTags = useNodes(handleTagClick);

  return (
    <main style={{ width: "500px", height: "500px" }}>
      {activeTag && (
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "200px",
            border: "solid 1px red",
            right: "10px",
            top: "10px",
          }}
        >
          <CopyBlock
            text={activeTag.outerHTML}
            language="html"
            wrapLongLines={true}
          />
        </div>
      )}
      <ul>
        <li>TEST</li>
      </ul>
      <button>click me</button>
      <div>{jsxTags}</div>
      {/* <div style={{ width: "500px", height: "500px" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div> */}
    </main>
  );
}
