import axios from "axios";
import { useState } from "react";

function UploadResume(){

const [file,setFile] = useState(null);

const upload = async ()=>{

const formData = new FormData();
formData.append("resume",file);

await axios.post("http://localhost:5000/upload",formData);

alert("Resume Uploaded");
}

return(

<div>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button onClick={upload}>
Upload Resume
</button>

</div>
)

}

export default UploadResume;