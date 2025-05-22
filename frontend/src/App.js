import ChatsBlock from "./components/ChatsBlock/ChatsBlock";
import DialogueBlock from "./components/DialogueBlock/DialogueBlock";
import "./App.css";
import DialogWindowAddChat from "./components/DialogWindowAddChat/DialogWindowAddChat"

function App() {
  return (
    <div className="app">
      <ChatsBlock />
      <DialogueBlock />
      <DialogWindowAddChat/>
    </div>
  );
}

export default App;
