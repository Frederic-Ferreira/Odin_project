const operationsWindow = document.querySelector(".operations");
const inputWindow = document.querySelector(".input");
const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operator");
const inputBtns = document.querySelectorAll(".input");

let replace = true;
let result = false;

numberBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const value =
      e.target.textContent === "."
        ? e.target.textContent
        : Number(e.target.textContent);
    replace === false || e.target.textContent === "."
      ? (inputWindow.textContent += `${value}`)
      : (inputWindow.textContent = value);
    replace = false;
  })
);

operationBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const operator = e.target.textContent;
    const previousOperator = operationsWindow.textContent.slice(-1);
    const previousValue = Number(operationsWindow.textContent.slice(0, -2));
    const currentValue = Number(inputWindow.textContent);
    replace = true;
    if (!e.target.classList.contains("equal")) {
      operationsWindow.textContent === "" || result === true
        ? (operationsWindow.textContent =
            inputWindow.textContent + ` ${operator}`)
        : (operationsWindow.textContent =
            isFloat(operate(previousOperator, previousValue, currentValue)) +
            ` ${operator}`);
      result = false;
    } else {
      result = true;
      operationsWindow.textContent =
        operationsWindow.textContent + ` ${currentValue}`;
      inputWindow.textContent = isFloat(
        operate(previousOperator, previousValue, currentValue)
      );
    }
  })
);

inputBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete"))
      inputWindow.textContent = inputWindow.textContent.slice(0, -1);
    else {
      inputWindow.textContent = 0;
      operationsWindow.textContent = "";
      replace = true;
    }
  })
);

function isFloat(num) {
  return Number.isInteger(num) ? num : Math.round(num * 1000) / 1000;
}

function operate(ope, num1, num2) {
  return ope === "+"
    ? add(num1, num2)
    : ope === "-"
    ? substract(num1, num2)
    : ope === "x"
    ? multiply(num1, num2)
    : ope === "÷"
    ? divide(num1, num2)
    : "null";
}

const add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};
