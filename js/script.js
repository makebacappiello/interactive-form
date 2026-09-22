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

const activities = document.querySelector("#activities");
let totalActivitiesCost = document.querySelector("#activities-cost");
let total = 0;
console.log("ACTIVITIES", activities);
console.log("ACTIVITY COST", totalActivitiesCost);

const payment = document.querySelector("#payment");
const creditCard = document.querySelector("#credit-card");
const payPal = document.querySelector("#paypal");
const bitCoin = document.querySelector("#bitcoin");
console.log("PAYMENT", payment);
console.log("CREDITCARD", creditCard);
console.log("PAYPAL", payPal);
console.log("BITCOIN", bitCoin);

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
    // the current color will be the one currently going through the loop
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

//listen for the change event
activities.addEventListener("change", (event) => {
  // used resource https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus here to turn the string into a number
  const cost = +event.target.getAttribute("data-cost");
  console.log("COST", typeof cost);
  console.log("ACTUAL", cost);

  //if item is selected add the cost otherwise minus the cost
  if (event.target.checked) {
    total += cost;
  } else {
    total -= cost;
  }
  //add this to the interface
  totalActivitiesCost.innerHTML = "Total: $" + total;
});

payPal.hidden = true;
bitCoin.hidden = true;

//set the current selections of payment on
payment.children[1].setAttribute("selected", true);

//listening for the change in payment to happen
payment.addEventListener("change", (event) => {
  // if credit crd is selected show it then hide the other 2
  if (event.target.value === "credit-card") {
    creditCard.hidden = false;
    payPal.hidden = true;
    bitCoin.hidden = true;
  }
  if (event.target.value === "paypal") {
    payPal.hidden = false;
    creditCard.hidden = true;
    bitCoin.hidden = true;
  }
  if (event.target.value === "bitcoin") {
    bitCoin.hidden = false;
    payPal.hidden = true;
    creditCard.hidden = true;
  }
});
