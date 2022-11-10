
const prompt = require('prompt-sync') ({sigint: true});


function classGroups() {
  let totalStand = parseInt(prompt("What is the class stand?"));

  if (totalStand % 3 === 0) {
    console.log(
      `we would create ${Math.floor(
        totalStand / 3
      )} groups of 3 and 0 groups of 2`
    );
  } else if (totalStand % 3 === 1) {
    console.log(
      `we would create ${Math.floor(
        totalStand / 3 - 1
      )} groups of 3 and 2 groups of 2`
    );
  } else if (totalStand % 3 === 2) {
    console.log(
      `we would create ${Math.floor(
        totalStand / 3
      )} groups of 3 and 1 groups of 2`
    );
  }
}
