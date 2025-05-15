import "./ChatItem.css";
import IconBlock from "./IconBlock/IconBlock";
import ChatItemTextTimeBlock from "./ChatItemTextTimeBlock/ChatItemTextTimeBlock";

function ChatItem() {
  return (
    <div className="chat-item">
      <IconBlock />
      <ChatItemTextTimeBlock />
    </div>
  );
}

export default ChatItem;
