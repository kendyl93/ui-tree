"use client";
import { useEffect, useState } from "react";
import ReactFlow from "reactflow";
// import "reactflow/dist/style.css";

function displayChildTagNames(domString: any) {
  if (!domString) {
    return;
  }
  // Create a temporary container element
  const container = document.createElement("div");

  // Set the innerHTML of the container to the provided DOM string
  container.innerHTML = domString;

  // Traverse the DOM structure recursively
  const traverse = (element: any, depth = 0) => {
    const jsxElements: any = []; // Initialize the array here to ensure it's reset for each recursion

    if (!element || !element.childNodes || element.childNodes.length === 0) {
      return jsxElements; // Return empty array if there are no child nodes
    }

    const childNodes = Array.from(element.childNodes);

    childNodes.forEach((node: any) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Build the JSX representation with indentation based on depth
        const tagPath = node.tagName.toLowerCase();
        const indentation = " ".repeat(depth * 2);
        const jsxElement = (
          <div key={tagPath} style={{ marginLeft: `${depth * 10}px` }}>
            {indentation}
            {tagPath}
            {traverse(node, depth + 1)}{" "}
          </div>
        );
        jsxElements.push(jsxElement);
      }
    });

    return jsxElements; // Return the JSX elements
  };

  // Start the traversal from the root container
  return traverse(container);
}

export default function Home() {
  const [nodes, setNodes] = useState<any | null>(null);

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.local.get("documentContent", function (data) {
        setNodes(data.documentContent.content || "");
      });
    } else {
      setNodes(window.document.documentElement.outerHTML || "");
      console.error("chrome.storage is not available.");
    }

    return () => {
      setNodes(null);
    };
  }, []);

  const jsxTags = displayChildTagNames(nodes);
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
