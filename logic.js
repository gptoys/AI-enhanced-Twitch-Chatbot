const electron = require("electron");
const ipc = electron.ipcRenderer;
const newConnectToTwitch = require("./connectToTwitch");
const handleMessage = require("./messageHandler")

//use twurple instead


document.getElementById("tmilink").addEventListener("click", function () {
  let active_hotspot_id = localStorage.getItem("active_hotspot_id");