const fs = require('fs');

const save = document.getElementById('saveCreds');
save.addEventListener('click', (event) => {
  event.preventDefault();
  const username = documen