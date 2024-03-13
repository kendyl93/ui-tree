type ChildWithNodesProps = {
  element: Element;
  depth: number;
  callback: any;
};

const ChildWithNodes = ({ element, depth, callback }: ChildWithNodesProps) => {
  const tagPath = element.tagName.toLowerCase();
  const indentation = " ".repeat(depth * 2);

  return (
    <ul
      key={tagPath}
      className="relative mb-10 after:content-[''] after:absolute after:h-[calc(100%)] after:-left-7 after:top-4 after:border-solid after:border-2 after:border-pink-500"
      style={{ marginLeft: `${depth * 10}px` }}
    >
      {indentation}
      <li className="border-4 inline-block relative text-lg text-lime-600  before:content-[''] before:absolute before:h-0 before:w-10 before:-left-10 before:top-3 before:border-solid before:border-2 before:border-pink-400">
        {tagPath}
      </li>
      {callback(element, depth + 1)}{" "}
    </ul>
  );
};

export default ChildWithNodes;
