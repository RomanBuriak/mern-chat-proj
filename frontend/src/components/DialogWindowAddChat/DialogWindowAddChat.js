import "./DialogWindowAddChat.css";
import { useState } from "react";

function DialogWindowAddChat() {
  const [content, setContent] = useState();
  console.log(content);

  function CreateChat() {
    console.log(content);
  }
  return (
    <div className="dialog-window-add-chat">
      <label for="fname">First name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        onChangeText={() => setContent()}
      />
      <label for="lname">Last name:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        onChangeText={() => setContent(this.text)}
      />
      <input
        type="submit"
        value="Add Chat"
        onClick={() => CreateChat()}
      ></input>
    </div>
  );
}

export default DialogWindowAddChat;
