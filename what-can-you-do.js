const prompt = require('prompt-sync') ({sigint: true});

function whatCanYouDo() {
  let age = prompt("What is you age?");

  if (age < 0) return "Invalid age";
  else if (age > 0 && age < 16) console.log(`You can't drive.`);
  else if (age > 16 && age < 18) console.log(`You can drive but not vote.`);
  else if (age > 18 && age < 25)

    console.log("You can vote but not rent a car.");
}
