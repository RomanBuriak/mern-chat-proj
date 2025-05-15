import ChatItemTextBlockName from "./ChatItemTextBlockName/ChatItemTextBlockName";
import ChatItemTextBlockLastMessage from "./ChatItemTextBlockLastMessage/ChatItemTextBlockLastMessage"

function ChatItemTextBlock() {
  return (
    <div className="chat-item-text-block">
      <ChatItemTextBlockName />
      <ChatItemTextBlockLastMessage/>
    </div>
  );
}

export default ChatItemTextBlock;
