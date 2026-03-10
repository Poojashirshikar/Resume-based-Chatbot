let resumeText = "";

function storeResume(text) {

  resumeText = text;

}

function getResume() {

  return resumeText;

}

module.exports = {
  storeResume,
  getResume
};