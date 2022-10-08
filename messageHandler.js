
const handleMessage = (TwitchClient) => {
  const fs = require("fs");
  const axios = require("axios");
  const OPENAI_ENDPOINT = "https://api.openai.com/v1/completions";
  const MODEL = "text-davinci-003";
  const lastGPTResponse = document.getElementById("aiStatus");
  
  let onCooldown = false
  TwitchClient.on("message", (channel, tags, message, self) => 
  //here it begins
  {
    let timeout = "";
let timeoutHTML = Number(document.getElementById("timeout").value);
if (isNaN(timeoutHTML) || timeoutHTML <= 0) {
  timeout = 0;
} else {
  timeout = timeoutHTML;
}
      
    if (self) return;

    if (message.startsWith("!ai") != true) return;

    if (onCooldown == true) return;

    //getting message substring without !ai part