type LastChildProps = {
  element: Element;
  depth: number;
  onTagClick: any;
};

const LastChild = ({ element, depth, onTagClick }: LastChildProps) => {
  const tagPath = element.tagName.toLowerCase();
  return (
    <div>
      <div
        onClick={(e: any) => {
          if (tagPath !== "script" && tagPath !== "style") {
            onTagClick(e, element);
          }
        }}
        key={`empty-${tagPath}`}
        className="inline-block relative border-4 border-solid border-green-500 text-lg text-lime-600 ml-[48px] before:content-[''] before:absolute before:h-0 before:w-[36px] before:-left-[36px] before:top-3 before:border-solid before:border-2 before:border-pink-400 after:absolute after:h-[36px] after:-left-[36px] after:border-solid after:border-2 after:border-pink-500"
      >
        {tagPath}
        {element?.textContent &&
          tagPath !== "script" &&
          tagPath !== "style" &&
          ` - ${element?.textContent}`}
      </div>
    </div>
  );
};

export default LastChild;
