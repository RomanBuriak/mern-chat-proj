import "./DialogueBlockHeaderBlock.css";
import IconBlock from "./IconBlock/IconBlock";
import DialogueBlockTitle from "./DialogueBlockTitle/DialogueBlockTitle";

function DialogueBlockHeaderBlock() {
  return (
    <div className="dialogue-block-header-block">
      <IconBlock />
      <DialogueBlockTitle />
    </div>
  );
}

export default DialogueBlockHeaderBlock;
