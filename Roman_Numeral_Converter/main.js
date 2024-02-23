const convertButton = document.getElementById("convert-btn")
const numberInput = document.getElementById("number")
const output = document.getElementById('output');

const romanToNum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};



const convertToRoman = (input) => {
  let roman = "";
  for (const key in romanToNum){
    while (input >= romanToNum[key]){
      roman += key;
      input -= romanToNum[key]
    }
  }
  return roman;
};
 

const checkUserInput = () => {
  if (!numberInput.value) {
    output.textContent = "Please enter a valid number"
  }
    else if (isNaN(parseInt(numberInput.value))){
      output.textContent = "Please provide a decimal number"
  }
    else if (numberInput.value < 0) {
    output.textContent = "Please enter a number greater than or equal to 1"
  } else if (numberInput.value >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999"
  } else
  output.textContent = convertToRoman(parseInt(numberInput.value));
  numberInput.value = "";
  output.classList.remove("hidden")
};

convertButton.addEventListener("click", checkUserInput);


numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});