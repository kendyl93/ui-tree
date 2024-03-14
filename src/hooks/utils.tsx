import LastChild from "../components/LastChild";
import ChildWithNodes from "../components/ChildWithNodes";

export const displayChildTagNames = (
  DOMstringified: string,
  onTagClick: any
): React.ReactElement[] => {
  if (!DOMstringified) {
    return [];
  }

  const parser = new DOMParser();
  const container = parser.parseFromString(DOMstringified, "text/html");

  const mapChildNodes = (
    element: Element | Document,
    depth = 0
  ): React.ReactElement[] => {
    const jsxElements: React.ReactElement[] = [];

    if (!element) {
      return jsxElements;
    }

    const childNodes = Array.from(element.childNodes);

    childNodes.forEach((node: any) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const elementNode = node as Element;

        if (elementNode.childElementCount === 0) {
          jsxElements.push(
            <LastChild
              element={elementNode}
              depth={depth}
              onTagClick={onTagClick}
            />
          );
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
