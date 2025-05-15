import "./ChatsListBlock.css";
import ChatsListBlockHeader from "./ChatsListBlockHeader/ChatsListBlockHeader";
import ChatsListBlockItemsBlock from "./ChatsListBlockItemsBlock/ChatsListBlockItemsBlock";

function ChatsListBlock() {
  return (
    <div className="chats-list-block">
      <ChatsListBlockHeader />
      <ChatsListBlockItemsBlock/>
    </div>
  );
}

export default ChatsListBlock;
