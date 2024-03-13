import LastChild from "../components/LastChild";
import ChildWithNodes from "../components/ChildWithNodes";

export const displayChildTagNames = (
  DOMstringified: string
): React.ReactElement[] => {
  if (!DOMstringified) {
    return [];
  }

  const container = document.createElement("div");
  container.innerHTML = DOMstringified;

  const mapChildNodes = (
    element: Element | null,
    depth = 0
  ): React.ReactElement[] => {
    const jsxElements: React.ReactElement[] = [];

    if (!element) {
      return jsxElements;
    }

    const childNodes = Array.from(element.childNodes);

    childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const elementNode = node as Element;

        if (elementNode.childElementCount === 0) {
          jsxElements.push(<LastChild element={elementNode} depth={depth} />);
          return;
        }

        jsxElements.push(
          <ChildWithNodes
            element={elementNode}
            depth={depth}
            callback={mapChildNodes}
          />
        );
      }
    });

    return jsxElements;
  };

  return mapChildNodes(container);
};
