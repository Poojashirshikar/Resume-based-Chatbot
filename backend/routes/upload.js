const express = require("express");
const router = express.Router();   // <-- router defined here
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

let resumeText = "";

router.post("/", upload.single("resume"), async (req, res) => {

  console.log("Upload route hit");

  resumeText = "Resume uploaded: " + req.file.originalname;

  res.json({
    message: "Resume uploaded successfully"
  });

});

module.exports = { router, resumeText };