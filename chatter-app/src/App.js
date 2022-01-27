
import "./App.css";
import TextInput from "./TextInput";
import {useState} from "react";
import Message from "./Message";

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "pukhraj",
    };
    setMessages([newMessage,...messages]);
  }
  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CATTER</span>
      </header>
      <div className="example-texts">
        hi whats up!
      </div>
      <div className = "messages">
        {messages.map((msg)=> {
          return <div className="message">{msg.text}</div>;
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;