
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
    var twitchMessage = message.substring(message.indexOf(" ") + 1);

    //try catch checks if we have a file in folder called stoplist.csv.
    //checking the message word by word for matching any of our words in banlist
    try {
      const csv = fs.readFileSync("stoplist.csv", "utf8").split(",");
      if (csv[csv.length - 1] === "") {
        csv.pop();
      }
      const containsValue = csv.some((value) => twitchMessage.includes(value));
      if (containsValue) {
        TwitchClient.say(channel, "the message contains a naughty word.");
        return;
      }
    } catch (error) {
      console.warn("No word filter found!");
    }

    let tokens = "";
let tokensHTML = Number(document.getElementById("tokens").value);
if (isNaN(tokensHTML) || tokensHTML <= 10) {
  tokens = 200;
} else {
  tokens = tokensHTML;
}
    let aiKey = document.getElementById("aiKey").value;
    axios