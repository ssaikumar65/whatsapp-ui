import './index.css';
const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
const MessageItem = (props) => {
  return (
    <div className={`message-item ${props.float}`}>
        <div className="message">
            <span>
                {props.msg!==undefined?props.msg:text}
            </span>
            <h6>{props.time}</h6>
        </div>
    </div>
  )
}

export default MessageItem