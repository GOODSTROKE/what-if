const prompt = require('prompt-sync') ({sigint: true});


function weekDay() {
  let day = parseInt(prompt("Please enter the day number"));
  if (day === 1) console.log("Monday");
  else if (day === 2) console.log("Tuesday");
  else if (day === 3) console.log("Wednesday");
  else if (day === 4) console.log("Thursday");
  else if (day === 5) console.log("Friday");
  else if (day === 6) console.log("Saturday");
  else if (day === 7) console.log("Sunday");
  else console.log("error");
}
