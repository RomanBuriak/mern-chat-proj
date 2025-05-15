import "./MessageBlockResponce.css";
import MessageBlockImgTextResponce from "./MessageBlockImgTextResponce/MessageBlockImgTextResponce";
import MessageBlockTimeResponce from "./MessageBlockTimeResponce/MessageBlockTimeResponce";

function MessageBlockResponce() {
  return (
    <div className="message-block-responce">
      <MessageBlockImgTextResponce />
      <MessageBlockTimeResponce />
    </div>
  );
}

export default MessageBlockResponce;
