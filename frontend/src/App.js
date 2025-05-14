import SearchBarBlock from "./components/ChatsBlock/SearchBarBlock/SearchBarBlock";

function App() {
  return (
    <div className="app">
      <div className="chats-block">
        <SearchBarBlock />
        <div className="chats-list-block">
          <div className="chats-list-block-header">
            <div className="chats-list-block-header-title">Chats</div>
            <button
              type="button"
              className="chats-list-block-header-add-chat-button"
            >
              Add chat
            </button>
          </div>
          <div className="chats-list-block-items-block">
            <div className="chat-item">
              <div className="icon-block">
                <div className="icon-block-img"></div>
                <img
                  src="../imgs/Check.png"
                  className="icon-block-active"
                  alt="icon-block-active"
                />
              </div>
              <div className="chat-item-text-time-block">
                <div className="chat-item-text-block">
                  <div className="chat-item-text-block-name">Alice Freeman</div>
                  <div className="chat-item-text-block-last-message">
                    How was your meeting?
                  </div>
                </div>
                <div className="chat-item-time-block">
                  <div className="chat-item-time-block-text">Aug 17, 2025</div>
                </div>
              </div>
            </div>
            <div className="chat-item">
              <div className="icon-block">
                <div className="icon-block-img"></div>
                <img
                  src="../imgs/Check.png"
                  className="icon-block-active"
                  alt="icon-block-active"
                />
              </div>
              <div className="chat-item-text-time-block">
                <div className="chat-item-text-block">
                  <div className="chat-item-text-block-name">Alice Freeman</div>
                  <div className="chat-item-text-block-last-message">
                    How was your meeting?
                  </div>
                </div>
                <div className="chat-item-time-block">
                  <div className="chat-item-time-block-text">Aug 17, 2025</div>
                </div>
              </div>
            </div>
            <div className="chat-item">
              <div className="icon-block">
                <div className="icon-block-img"></div>
                <img
                  src="../imgs/Check.png"
                  className="icon-block-active"
                  alt="icon-block-active"
                />
              </div>
              <div className="chat-item-text-time-block">
                <div className="chat-item-text-block">
                  <div className="chat-item-text-block-name">Alice Freeman</div>
                  <div className="chat-item-text-block-last-message">
                    How was your meeting?
                  </div>
                </div>
                <div className="chat-item-time-block">
                  <div className="chat-item-time-block-text">Aug 17, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dialogue-block">
        <div className="dialogue-block-header-block">
          <div className="icon-block">
            <div className="icon-block-img"></div>
            <img
              src="../imgs/Check.png"
              className="icon-block-active"
              alt="con-block-active"
            />
          </div>
          <div className="dialogue-block-title">Alice Freeman</div>
        </div>
        <div className="chat-canvas">
          <div className="message-block">
            <div className="message-block-img-text">
              <div className="message-block-text">Hi, how are you?</div>
            </div>
            <div className="message-block-time">8/17/2025, 7:43 AM</div>
          </div>
          <div className="message-block-responce">
            <div className="message-block-img-text">
              <div className="icon-block-img"></div>
              <div className="message-block-text-responce">
                Hi, how are you?
              </div>
            </div>
            <div className="message-block-time-responce">
              8/17/2025, 7:43 AM
            </div>
          </div>
        </div>
        <div className="send-message-block">
          <div className="type-message-block">
            <div className="type-message-block-text">Type your message</div>
            <img
              src="../imgs/Sent.png"
              className="type-message-block-send-btn"
              alt="type-message-block-send-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
