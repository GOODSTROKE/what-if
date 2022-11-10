const prompt = require('prompt-sync') ({sigint: true});


function weightWithRelativeGravity() {
  let weight = parseInt(prompt("Enter your weight in lbs"));
  let planetNum = parseInt(prompt("Enter planet number between 1-6 "));

  let relativeWeight;
  if (planetNum === 1) relativeWeight = (weight * 0.78).toFixed(2);
  else if (planetNum === 2) relativeWeight = (weight * 0.39).toFixed(2);
  else if (planetNum === 3) relativeWeight = (weight * 2.65).toFixed(2);
  else if (planetNum === 4) relativeWeight = (weight * 1.17).toFixed(2);
  else if (planetNum === 5) relativeWeight = (weight * 1.05).toFixed(2);
  else if (planetNum === 6) relativeWeight = (weight * 1.28).toFixed(2);
  else relativeWeight = "invalid planet number";
  console.log(
    `The ${weight}lbs weight on earth is equal to ${relativeWeight} on given planet number.`
  );
}
