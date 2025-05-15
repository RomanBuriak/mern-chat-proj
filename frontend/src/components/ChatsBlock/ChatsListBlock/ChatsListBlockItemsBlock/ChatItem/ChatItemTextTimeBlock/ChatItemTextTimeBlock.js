import "./ChatItemTextTimeBlock.css";
import ChatItemTextBlock from "./ChatItemTextBlock/ChatItemTextBlock";
import ChatItemTimeBlock from "./ChatItemTimeBlock/ChatItemTimeBlock";

function ChatItemTextTimeBlock() {
  return (
    <div className="chat-item-text-time-block">
      <ChatItemTextBlock />
      <ChatItemTimeBlock />
    </div>
  );
}

export default ChatItemTextTimeBlock;
