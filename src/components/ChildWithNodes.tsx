import styles from "./ChildWithNodes.module.css";

type ChildWithNodesProps = {
  element: Element;
  depth: number;
  callback: any;
};

type CustomStyle = {
  [key: string]: string;
};

const ChildWithNodes = ({ element, depth, callback }: ChildWithNodesProps) => {
  const tagPath = element.tagName.toLowerCase();
  const nextSibling = element?.nextSibling;

  const customStyle: CustomStyle = {
    "--nextSibling": nextSibling ? "calc(100% + 36px)" : "36px",
  };

  return (
    <div
      key={tagPath}
      style={customStyle}
      className={`${styles.dupa} after:content-[''] after:border-solid after:border-2 after:border-pink-500 relative mb-[40px] ml-[50px]`}
    >
      <div
        className={` inline-block relative text-lg text-lime-600   before:content-[''] before:absolute before:h-0 before:w-[38px] before:-left-[38px] before:top-3 before:border-solid before:border-2 before:border-pink-400`}
      >
        <span className="border-4 border-solid border-pink-500">{tagPath}</span>
        {callback(element, depth + 1)}{" "}
      </div>
    </div>
  );
};

export default ChildWithNodes;
