
const fs = require("fs");
const addWords = document.getElementById("addWords");
const input = document.getElementById("wordlist");
addWords.addEventListener("click", () => {
  // Get the selected file
  const file = input.files[0];

  // Check if the file is a CSV file
  if (file.name.endsWith(".csv")) {
    // Create a FileReader object
    const reader = new FileReader();

    // Read the contents of the file as a text string
    reader.readAsText(file);

    // When the file has been read, add its contents to the stoplist.csv file
    reader.onload = () => {