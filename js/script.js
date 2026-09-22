console.log("Test");
//after finding the name input focus on this so curser appears in the fields
document.querySelector("#name").focus();

const jobRole = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");
console.log(jobRole);
console.log(otherJobRole);

const design = document.querySelector("#design");
const color = document.querySelector("#color");
console.log(color);
console.log(design);
console.log("JavaScript is connected!");
//hiding the variable by default
otherJobRole.hidden = true;

//adding an event listener on change if the other option is selected from jobrole then show the other field if not stay hidden
jobRole.addEventListener("change", (event) => {
  if (event.target.value === "other") {
    otherJobRole.hidden = false;
  } else {
    otherJobRole.hidden = true;
  }
});
