
const prompt = require('prompt-sync') ({sigint: true});


function fizzbuzz() {
  let num = parseInt(prompt("Enter any number"));
  if (num % 3 === 0 && num % 5 === 0) console.log("fizzbuzz");
  else if (num % 3 === 0) console.log("fizz");
  else if (num % 5 === 0) console.log("buzz");
}
