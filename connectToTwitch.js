const newConnectToTwitch = (TwitchClient) => {
  const connectButton = document.getElementById("submit");
  lockables = document.querySelectorAll(".lockable");
  TwitchClient.connect().then(
    function (result) {
      connectButton.style = "