import "./ChatCanvas.css";
import MessageBlock from "./MessageBlock/MessageBlock";
import MessageBlockResponce from "./MessageBlockResponce/MessageBlockResponce";

function ChatCanvas() {
  return (
    <div className="chat-canvas">
      <MessageBlock />
      <MessageBlockResponce />
    </div>
  );
}

export default ChatCanvas;
