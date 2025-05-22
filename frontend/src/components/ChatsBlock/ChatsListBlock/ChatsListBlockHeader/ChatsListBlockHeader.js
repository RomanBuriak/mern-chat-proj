import "./ChatsListBlockHeader.css";
import ChatsListBlockHeaderTitle from "./ChatsListBlockHeaderTitle/ChatsListBlockHeaderTitle";
import ChatsListBlockHeaderAddChatButton from "./ChatsListBlockHeaderAddChatButton/ChatsListBlockHeaderAddChatButton";
import ChatsListBlockHeaderEditButton from "./ChatsListBlockHeaderEditButton/ChatsListBlockHeaderEditButton";

function ChatsListBlockHeader() {
  return (
    <div className="chats-list-block-header">
      <ChatsListBlockHeaderTitle />
      <ChatsListBlockHeaderAddChatButton />
      <ChatsListBlockHeaderEditButton />
    </div>
  );
}

export default ChatsListBlockHeader;
