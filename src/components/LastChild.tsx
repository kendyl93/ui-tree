type LastChildProps = {
  element: Element;
  depth: number;
  onTagClick: any;
};

const LastChild = ({ element, depth, onTagClick }: LastChildProps) => {
  const tagPath = element.tagName.toLowerCase();
  return (
    <ul>
      <li
        onClick={(e: any) => {
          if (tagPath !== "script" && tagPath !== "style") {
            onTagClick(e, element);
          }
        }}
        style={{ marginLeft: `${depth * 10}px` }}
        key={`empty-${tagPath}`}
        className="relative text-lg text-lime-600  before:content-[''] before:absolute before:h-0 before:w-10 before:-left-10 before:top-3 before:border-solid before:border-2 before:border-pink-400"
      >
        {tagPath}
        {element?.textContent &&
          tagPath !== "script" &&
          tagPath !== "style" &&
          ` - ${element?.textContent}`}
      </li>
    </ul>
  );
};

export default LastChild;
