const operationsWindow = document.querySelector(".operations");
const inputWindow = document.querySelector(".input");
const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operator");
const inputBtns = document.querySelectorAll(".input");

// initialisation des valeurs pour savoir si on doit/peut remplacer et afficher le résultat
let replace = true;
let result = false;

function addNumber(e) {
  let checkDot;
  let input;
  e.key
    ? (checkDot = e.key.includes("."))
    : (checkDot = e.target.classList.contains("dot"));
  e.key ? (input = e.key) : (input = e.target.textContent);

  if (checkDot) if (inputWindow.textContent.includes(".")) return;
  // Convertir en nombre que si ce n'est pas un point
  const value = input === "." ? input : Number(input);
  // si replace n'est pas initialiser ou que l'input est un point, ajouter valeur à la suite de l'input
  replace === false || input === "."
    ? (inputWindow.textContent += `${value}`)
    : (inputWindow.textContent = value);
  replace = false;
}

function operations(e) {
  let checkEqual;
  let operator;
  e.key
    ? (checkEqual = e.key.includes("="))
    : (checkEqual = e.target.classList.contains("equal"));
  e.key ? (operator = e.key) : (operator = e.target.textContent);

  const previousOperator = operationsWindow.textContent.slice(-1);
  const previousValue = Number(operationsWindow.textContent.slice(0, -2));
  const currentValue = Number(inputWindow.textContent);
  // remplacer l'input après une opération
  replace = true;
  if (!checkEqual) {
    // si l'input des opérations est vide ou que un resultat a été effectué,
    // remplacer l'input des opérations par le nouveau contenu, sinon effectuer
    // l'opération
    operationsWindow.textContent === "" || result === true
      ? (operationsWindow.textContent =
          inputWindow.textContent + ` ${operator}`)
      : (operationsWindow.textContent =
          isFloat(operate(previousOperator, previousValue, currentValue)) +
          ` ${operator}`);
    result = false;
  } else {
    console.log(inputWindow.textContent);
    // empêcher de voir un résultat sans opération et savoir si on doit remplacer
    // l'input (si c'est 0) ou pas
    if (operationsWindow.textContent === "") {
      if (inputWindow.textContent == 0) return (replace = true);
      else return (replace = false);
    }
    result = true;
    operationsWindow.textContent =
      operationsWindow.textContent + ` ${currentValue}`;
    // afficher le résultat de l'opération dans la fenêtre input
    inputWindow.textContent = isFloat(
      operate(previousOperator, previousValue, currentValue)
    );
  }
}

function clear(e) {
  let checkDelete;
  e.key
    ? (checkDelete = e.key.includes("Backspace"))
    : (checkDelete = e.target.classList.contains("delete"));

  if (checkDelete) {
    inputWindow.textContent = inputWindow.textContent.slice(0, -1);
    replace = false;
  } else {
    inputWindow.textContent = 0;
    operationsWindow.textContent = "";
    replace = true;
  }
}

function keydowns(e) {
  const k = e.key;
  if (
    k.includes("1") ||
    k.includes("2") ||
    k.includes("3") ||
    k.includes("4") ||
    k.includes("5") ||
    k.includes("6") ||
    k.includes("7") ||
    k.includes("8") ||
    k.includes("9") ||
    k.includes("0") ||
    k.includes(".")
  )
    addNumber();
  else if (
    k.includes("+") ||
    k.includes("-") ||
    k.includes("/") ||
    k.includes("*") ||
    k.includes("=")
  )
    operations();
  else if (k.includes("Backspace") || k.includes("Escape")) clear();
  else return;
}

document.addEventListener("keydown");

numberBtns.forEach((btn) => btn.addEventListener("click", addNumber));

operationBtns.forEach((btn) => btn.addEventListener("click", operations));

inputBtns.forEach((btn) => btn.addEventListener("click", clear));

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
