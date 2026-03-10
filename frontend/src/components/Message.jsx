function Message({ sender, text }) {

  return (
    <div
      style={{
        padding: "10px",
        margin: "10px",
        backgroundColor: sender === "user" ? "#d1e7dd" : "#f8d7da",
        borderRadius: "10px",
        maxWidth: "60%"
      }}
    >

      <b>{sender === "user" ? "You" : "Bot"}:</b>

      <p>{text}</p>

    </div>
  );

}

export default Message;