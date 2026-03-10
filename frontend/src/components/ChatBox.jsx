import axios from "axios";
import { useState } from "react";

function ChatBox(){

const [question,setQuestion]=useState("");
const [messages,setMessages]=useState([]);

const sendQuestion = async ()=>{

const res = await axios.post(
"http://localhost:5000/chat",
{question}
);

setMessages([
...messages,
{user:question,bot:res.data.answer}
]);

setQuestion("");

};

return(

<div>

{messages.map((m,i)=>(
<div key={i}>
<p><b>You:</b> {m.user}</p>
<p><b>Bot:</b> {m.bot}</p>
</div>
))}

<input
value={question}
onChange={(e)=>setQuestion(e.target.value)}
/>

<button onClick={sendQuestion}>
Send
</button>

</div>
)

}

export default ChatBox;