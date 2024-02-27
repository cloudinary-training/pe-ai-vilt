// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Generative Replace
// Replace the cocktail with coffee
console.log(cloudinary.image("pe-ai-vilt/ai_practice_cocktail", {}));
