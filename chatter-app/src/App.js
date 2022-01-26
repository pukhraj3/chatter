
import "./App.css";
import TextInput from "./TextInput";
import {useState} from "react";

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "pukhraj",
    };
    setMessages([text,...messages]);
  }
  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
      </header>
      <div className = "messages">
        {messages.map((msg)=> {
          return <div className="message">{msg}</div>;
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
