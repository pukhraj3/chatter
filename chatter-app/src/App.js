import "./App.css";
import TextInput from "./TextInput";
import {useState} from "react";
import Message from "./Message";
import { use100vh } from "react-div-100vh";
import Camera from "react-snap-pic"


// sendMessage runs when we click seend button
function App() {
  const height = use100vh();

  // useState creates a magic var
  // here it is called "messages"
  // the initial values is an empty array []
  // "setMessages" is a func that is used to update "messages"
  const [showCamera, setShowCamera] = useState(false)
  let [messages, setMessages] = useState([]);

  // "sendMessage" runs whenever we click the send button
  function sendMessage(text) {

    // if statement e5 part 8
    if (!text) return;    

    // create a new message
    const newMessage = {
      text: text,
      time: Date.now(),
      user: "pukhraj",
    };

    // set the "messages" to be new array
    // contains the new message and all the past ones
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);

  // we will use this function to add pictures to our messages
  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
}

  return (
    <div 
      className="App"
      style={{ height: height, minHeight: height, maxHeight: height }}>
      {showCamera && <Camera takePicture={takePicture} />}
      <header className="header">
        <div className="logo" />
        <span className="title">CATTER</span>
      </header>
      <div className="example-texts">
        hi whats up!
      </div>
      <div className = "messages">
        {messages.map((msg, i)=> {

          // loop over every message in the "messages" array
          // and return a Message component
          // we are "spreading" all the items in "msg" into the props
          // "key" needs to be a unique val for each item
          return <Message {...msg} key={i} />;
        })}

      </div>
      <TextInput sendMessage={sendMessage}
        showCamera={()=>setShowCamera(true)} 
        />
    </div>
  );
}

export default App;