const check_button = document.getElementById("check-btn");
const text_input = document.getElementById("text-input");
const result = document.getElementById("result")

check_button.addEventListener("click", () => {
  if (!text_input.value) {
    alert("Please input a value");
  }
});

function cleanInputString(str) {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, '');
}

function palCheck (input){
  const clean = cleanInputString(text_input.value).toLowerCase();
  const reverse = clean.split("").reverse().join("").toLowerCase();
  if(clean === reverse){
    result.innerHTML = `<strong>${text_input.value}</strong> is a Palindrome`
  } else {
    result.innerHTML = `${text_input.value} is not a Palindrome`
  }
}

check_button.addEventListener("click", palCheck)