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

//disabling the color element
color.disabled = true;

design.addEventListener("change", (event) => {
  color.disabled = false;
  // when you go through each item
  for (let i = 0; i < color.children.length; i++) {
    // the current color will be the one selected
    const currentColors = color.children[i];
    const colorTheme = currentColors.getAttribute("data-theme");
    //if the selected design matches the color's theme
    if (event.target.value === colorTheme) {
      //then show the colors
      currentColors.hidden = false;
      //set the current colors to selected
      currentColors.setAttribute("selected", true);
      //otherwise
    } else {
      //hide the current colors
      currentColors.hidden = true;
      //remove the list of current colors
      currentColors.removeAttribute("selected");
      console.log(currentColors);
    }
  }
});
