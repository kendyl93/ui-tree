"use client";
import { useEffect, useState } from "react";
import ReactFlow from "reactflow";
// import "reactflow/dist/style.css";

function displayChildTagNamesJSX(domString: string) {
  if (!domString) {
    return;
  }
  // Create a temporary container element
  const container = document.createElement("div");

  // Set the innerHTML of the container to the provided DOM string
  container.innerHTML = domString;

  // Initialize an array to store JSX elements
  const jsxElements: any = [];

  // Traverse the DOM structure recursively
  const traverse = (element: any, parentPath = "") => {
    if (!element || !element.childNodes || element.childNodes.length === 0) {
      return;
    }

    const childNodes = Array.from(element.childNodes);

    childNodes.forEach((node: any) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Build the JSX representation
        const tagPath = parentPath
          ? `${parentPath} > ${node.tagName.toLowerCase()}`
          : node.tagName.toLowerCase();
        const jsxElement = <div key={tagPath}>{tagPath}</div>; // Or any other JSX structure you prefer
        jsxElements.push(jsxElement);

        // Recursively traverse the child nodes
        traverse(node, tagPath);
      }
    });
  };

  traverse(container);

  return jsxElements;
}

export default function Home() {
  const [nodes, setNodes] = useState<any | null>(null);

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.local.get("documentContent", function (data) {
        setNodes(data.documentContent.content || "");
        // displayChildTagNames2(data.documentContent.content);
      });
    } else {
      setNodes(window.document.documentElement.outerHTML || "");
      console.error("chrome.storage is not available.");
    }
  }, []);

  const jsxTags = displayChildTagNamesJSX(nodes);
  console.log({ jsxTags });

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
