import "./DialogueBlock.css";
import DialogueBlockHeaderBlock from "./DialogueBlockHeaderBlock/DialogueBlockHeaderBlock";
import ChatCanvas from "./ChatCanvas/ChatCanvas";
import SendMessageBlock from "./SendMessageBlock/SendMessageBlock";

function DialogueBlock() {
  return (
    <div className="dialogue-block">
      <DialogueBlockHeaderBlock />
      <ChatCanvas />
      <SendMessageBlock />
    </div>
  );
}

export default DialogueBlock;
