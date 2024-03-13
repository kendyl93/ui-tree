type LastChildProps = {
  element: Element;
  depth: number;
};

const LastChild = ({ element, depth }: LastChildProps) => {
  const tagPath = element.tagName.toLowerCase();
  return (
    <div style={{ marginLeft: `${depth * 10}px` }} key={`empty-${tagPath}`}>
      {tagPath}
    </div>
  );
};

export default LastChild;
