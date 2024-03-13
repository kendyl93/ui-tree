import { useEffect, useState } from "react";
import { displayChildTagNames } from "./utils";

export const useNodes = () => {
  const [nodes, setNodes] = useState<string | null>(null);

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

  const jsxTags = displayChildTagNames(nodes ?? "");

  return jsxTags;
};
