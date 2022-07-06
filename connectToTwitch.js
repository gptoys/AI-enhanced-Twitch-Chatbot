const newConnectToTwitch = (TwitchClient) => {
  const connectButton = document.getElementById("submit");
  lockables = document.querySelectorAll(".lockable");
  TwitchClient.connect().then(
    function (result) {
      connectButton.style = "background-color:green";
      connectButton.innerHTML = `#${channelName}`;
      connectButton.disabled = true;
      TwitchClient.say(channelName, "AI has arrived. Ask me anything using !ai. For example, say \"!ai to be or not to be?\" Remember that i am just a machine learning algorithm and i try my best to be kind and friendly.");
      lockables.forEach(element => element.disabled = "true")
      lockables.forEach(element => element.style = "filter: brightness(50%);")
      document.getElementById("disconnect").addEventListener("click", () => {
    