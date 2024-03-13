type LastChildProps = {
  element: Element;
  depth: number;
  onTagClick: any;
};

const LastChild = ({ element, depth, onTagClick }: LastChildProps) => {
  const tagPath = element.tagName.toLowerCase();
  return (
    <div
      onClick={(e: any) => {
        if (tagPath !== "script" && tagPath !== "style") {
          onTagClick(e, element);
        }
      }}
      style={{ marginLeft: `${depth * 10}px` }}
      key={`empty-${tagPath}`}
    >
      {tagPath}
      {element?.textContent &&
        tagPath !== "script" &&
        tagPath !== "style" &&
        ` - ${element?.textContent}`}
    </div>
  );
};

export default LastChild;
