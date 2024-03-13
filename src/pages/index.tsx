import { useState } from "react";
import { CopyBlock } from "react-code-blocks";
import { useNodes } from "../hooks/useNodes";

export default function Home() {
  const [activeTag, setActiveTag] = useState<any>(null);
  const handleTagClick = async (e: any, tag?: any) => {
    if (!tag) {
      return;
    }
    setActiveTag({ innerHTML: tag.innerHTML, outerHTML: tag.outerHTML });
  };
  const jsxTags = useNodes(handleTagClick);

  return (
    <div className="p-7 bg-gray-200">
      {activeTag && (
        <div
          style={{
            position: "fixed",
            width: "300px",
            height: "200px",
            border: "solid 1px red",
            right: "10px",
            top: "10px",
            backgroundColor: "#ccc",
          }}
        >
          {activeTag.outerHTML}
        </div>
      )}
      <div>
        <ul>
          <li>TEST</li>
        </ul>
        <button>click me</button>
        <div className="m-7">{jsxTags}</div>
      </div>
    </div>
  );
}
