const newConnectToTwitch = (TwitchClient) => {
  const connectButton = document.getElementById("submit");
  lockables = document.querySelectorAll(".lockable");
  TwitchClient.connect().then(
    function (result) {
      connectButton.style = "background-color:green";
      connectButton.innerHTML = `#${channelName}`;
      connectB