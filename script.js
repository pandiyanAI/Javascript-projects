const inputField = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const parenthesesBtn = document.getElementById("parentheses");

const handleButtonClick = (button) => {
  switch (button.id) {
    case "clear":
      inputField.value = "";
      break;
    case "removeLastDigit":
      inputField.value = inputField.value.slice(0, -1);
      break;
    case "equals":
      try {
        let result = inputField.value.replace(/×/g, "*").replace(/÷/g, "/");
        console.log("", result);
        inputField.value = eval(result);
      } catch (error) {
        inputField.value = "Error";
      }
      break;
    default:
      inputField.value += button.textContent;
      break;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button));
});
