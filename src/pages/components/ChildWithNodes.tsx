type ChildWithNodesProps = {
  element: Element;
  depth: number;
  callback: any;
};

const ChildWithNodes = ({ element, depth, callback }: ChildWithNodesProps) => {
  const tagPath = element.tagName.toLowerCase();
  const indentation = " ".repeat(depth * 2);

  return (
    <details key={tagPath} style={{ marginLeft: `${depth * 10}px` }}>
      {indentation}
      <summary>{tagPath}</summary>
      {callback(element, depth + 1)}{" "}
    </details>
  );
};

export default ChildWithNodes;
