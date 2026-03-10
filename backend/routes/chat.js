const express = require("express");
const router = express.Router();

const { resumeText } = require("./upload");
const askAI = require("../utils/openai");

router.post("/", async (req, res) => {

  console.log("Question received:", req.body.question);

  const question = req.body.question;

  const prompt = `
You are an AI resume analyzer.

Only answer using the resume information.

If the answer is not in the resume, say:
"I cannot find this information in the resume."

Resume:
${resumeText}

Question:
${question}
`;

  const response = await askAI(prompt);

  res.json({
    answer: response
  });

});

module.exports = router;