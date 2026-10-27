// BIC21203 Lab 4a - Question 3: Dynamic Number Generator
// Kirthetharan Sehkar (AI240016)

// Select the button and the ordered list
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // Clear any existing items so repeated clicks do not duplicate the list
  numberList.replaceChildren();

  // Loop from 1 through 5
  for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");   // create a new <li>
    item.textContent = "The number is " + i;     // set its text safely
    numberList.appendChild(item);                // add it to the list
  }
}

// Attach the function to the button's click event
generateBtn.addEventListener("click", generateNumbers);
