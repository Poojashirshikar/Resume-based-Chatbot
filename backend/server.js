require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { router: uploadRoute } = require("./routes/upload");
const chatRoute = require("./routes/chat");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoute);
app.use("/chat", chatRoute);

app.listen(5000, () => {
  console.log("Server running");
  console.log("Loaded API Key:", process.env.OPENAI_API_KEY);
});