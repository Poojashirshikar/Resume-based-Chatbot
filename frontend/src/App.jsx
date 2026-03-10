import React, { useState } from "react";
import "./App.css";

function App() {

  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [file, setFile] = useState(null);

  // Upload Resume
  const handleUpload = async () => {

    if (!file) {
      alert("Please upload a resume first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    alert(data.message);
  };

  // Ask Question
  const sendMessage = async () => {

    if (!question) return;

    const newMessages = [
      ...messages,
      { sender: "user", text: question }
    ];

    setMessages(newMessages);

    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question: question })
    });

    const data = await response.json();

    setMessages([
      ...newMessages,
      { sender: "bot", text: data.answer }
    ]);

    setQuestion("");
  };

  return (
    <div className="container">

      <h1>Resume Chatbot 🤖</h1>

      {/* Upload Section */}
      <div className="upload-section">

        <h3>Upload Resume</h3>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />

        <button
          className="upload-btn"
          onClick={handleUpload}
        >
          Upload
        </button>

      </div>

      {/* Chatbox */}

      <div className="chatbox">

        {messages.length === 0 && (
          <div className="placeholder">
            Ask questions about the resume...
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user"
                ? "user-msg"
                : "bot-msg"
            }
          >
            {msg.text}
          </div>
        ))}

      </div>

      {/* Input Area */}

      <div className="input-area">

        <input
          type="text"
          placeholder="Ask about skills, projects..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default App;