const axios = require("axios");

async function askAI(prompt) {
  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "phi3",
      prompt: prompt,
      stream: false
    });

    return response.data.response;

  } catch (error) {
    console.error("Ollama API Error:", error.message);
    return "Error generating response";
  }
}

module.exports = askAI;