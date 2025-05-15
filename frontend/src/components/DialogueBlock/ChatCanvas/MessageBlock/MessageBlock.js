import "./MessageBlock.css";
import MessageBlockImgText from "./MessageBlockImgText/MessageBlockImgText";
import MessageBlockTime from "./MessageBlockTime/MessageBlockTime";

function MessageBlock() {
  return (
    <div className="message-block">
      <MessageBlockImgText />
      <MessageBlockTime />
    </div>
  );
}

export default MessageBlock;
