// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Generative Caption
// Use Gen Caption to automatically create a caption for this image
cloudinary.api
  .update("pe-ai-vilt/ai_practice_medical", {})
  .then((result) => console.log(result.info.detection.captioning));
