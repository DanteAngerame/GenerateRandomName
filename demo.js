function generateName() {
  const names = [
    "Donny",
    "Brett",
    "Rene",
    "Niran",
    "Kaaliyah",
    "Daniel",
    "Victor",
    "Uriel",
    "Jesus",
    "Alfi",
    "Andrea",
    "Abdi",
    "Monce",
    "Kadi",
    "Kayla",
    "Lupe",
    "Jaranesca",
    "Leslie",
    "Max",
    "Sabrina",
    "Zijn Koningschap Remsey"

  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * names.length);

  document.getElementById("displayname").innerHTML = names[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateIcebreaker();
