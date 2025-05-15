import "./ChatsListBlockHeader.css";
import ChatsListBlockHeaderTitle from "./ChatsListBlockHeaderTitle/ChatsListBlockHeaderTitle";
import ChatsListBlockHeaderAddChatButton from "./ChatsListBlockHeaderAddChatButton/ChatsListBlockHeaderAddChatButton";

function ChatsListBlockHeader() {
  return (
    <div className="chats-list-block-header">
      <ChatsListBlockHeaderTitle />
      <ChatsListBlockHeaderAddChatButton />
    </div>
  );
}

export default ChatsListBlockHeader;
