import TypeMessageBlockText from "./TypeMessageBlockText/TypeMessageBlockText";
import TypeMessageBlockSendBtn from "./TypeMessageBlockSendBtn/TypeMessageBlockSendBtn";
import "./TypeMessageBlock.css";

function TypeMessageBlock() {
  return (
    <div className="type-message-block">
      <TypeMessageBlockText />
      <TypeMessageBlockSendBtn />
    </div>
  );
}

export default TypeMessageBlock;
