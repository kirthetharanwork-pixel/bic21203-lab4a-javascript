// BIC21203 Lab 4a - Question 2: Smart Number Validator
// Kirthetharan Sehkar (AI240016)

// Select the input, button and output paragraph
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
  // Read the input and remove spaces at the start and end
  const value = userInput.value.trim();

  // Convert the text to a number (e.g. "10.5" -> 10.5, "abc" -> NaN)
  const number = Number(value);

  if (value === "" || !Number.isFinite(number)) {
    // Empty, whitespace-only, or not a valid number (e.g. "abc")
    result.textContent = "Please enter a valid number!";
  } else if (number < 10) {
    result.textContent = "The number is lower than 10";
  } else if (number > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

// Register the click event
checkBtn.addEventListener("click", checkInput);
