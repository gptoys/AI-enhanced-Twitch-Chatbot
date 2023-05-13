const fs = require('fs');

const save = document.getElementById('saveCreds');
save.addEventListener('click', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const channel = document.getElementById('channel').value;
  const oauth = document.getElementById('oauth').value;
  c