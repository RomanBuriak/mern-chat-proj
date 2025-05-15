import SearchBarBlock from "./SearchBarBlock/SearchBarBlock";
import ChatsListBlock from "./ChatsListBlock/ChatsListBlock";
import "./ChatsBlock.css";

function ChatsBlock() {
  return (
    <div className="chats-block">
      <SearchBarBlock />
      <ChatsListBlock />
    </div>
  );
}

export default ChatsBlock;
