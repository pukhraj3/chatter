export default function Message(props) {

    return (
        <div
          className="message-row"
          style={{ flexDirection: props.fromMe ? "row-reverse" : "row" }}
        >
          <div className="message">
            <span className="message-user">{props.user}</span>
            <span>{props.text}</span>
          </div>
        </div>
      );
    }
