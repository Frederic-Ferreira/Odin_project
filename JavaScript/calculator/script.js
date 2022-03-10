const operationsWindow = document.querySelector(".operations");
const inputWindow = document.querySelector(".input");
const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operator");
const inputBtns = document.querySelectorAll(".input");

// initialisation des valeurs pour savoir si on doit/peut remplacer et afficher le résultat
let replace = true;
let result = false;
let operation = true;

document.addEventListener("keydown", function (e) {
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
  ) {
    if (k.includes(".")) if (inputWindow.textContent.includes(".")) return;
    // Convertir en nombre que si ce n'est pas un point
    const value = k === "." ? k : Number(k);
    // si replace n'est pas initialiser ou que l'input est un point, ajouter valeur à la suite de l'input
    replace === false || k === "."
      ? (inputWindow.textContent += `${value}`)
      : (inputWindow.textContent = value);
    replace = false;
    operation = true;
  } else if (
    k.includes("+") ||
    k.includes("-") ||
    k.includes("/") ||
    k.includes("*") ||
    k.includes("=")
  ) {
    const operator = k === "*" ? "x" : k === "/" ? "÷" : k;
    const previousOperator = operationsWindow.textContent.slice(-1);
    const previousValue = Number(operationsWindow.textContent.slice(0, -2));
    const currentValue = Number(inputWindow.textContent);
    // remplacer l'input après une opération
    replace = true;
    if (!k.includes("=") && operation === true) {
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
      operation = false;
    } else if (k.includes("=")) {
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
  } else if (k.includes("Backspace") || k.includes("Escape")) {
    if (k.includes("Backspace"))
      inputWindow.textContent = inputWindow.textContent.slice(0, -1);
    else {
      inputWindow.textContent = 0;
      operationsWindow.textContent = "";
      replace = true;
    }
  }
});

numberBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    // si il y a déjà un point dans les chiffres, ne pas pouvoir en rajouter
    if (btn.classList.contains("dot"))
      if (inputWindow.textContent.includes(".")) return;
    // Convertir en nombre que si ce n'est pas un point
    const value =
      e.target.textContent === "."
        ? e.target.textContent
        : Number(e.target.textContent);
    // si replace n'est pas initialiser ou que l'input est un point, ajouter valeur à la suite de l'input
    replace === false || e.target.textContent === "."
      ? (inputWindow.textContent += `${value}`)
      : (inputWindow.textContent = value);
    replace = false;
    operation = true;
  })
);

operationBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const operator = e.target.textContent;
    const previousOperator = operationsWindow.textContent.slice(-1);
    const previousValue = Number(operationsWindow.textContent.slice(0, -2));
    const currentValue = Number(inputWindow.textContent);
    // remplacer l'input après une opération
    replace = true;
    if (!e.target.classList.contains("equal") && operation === true) {
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
      operation = false;
    } else if (e.target.classList.contains("equal")) {
      // empêcher de voir un résultat sans opération et savoir si on doit remplacer
      // l'input (si c'est 0) ou pas
      if (operationsWindow.textContent === "") {
        if (inputWindow.textContent == 0) return (replace = true);
        else return (replace = false);
      }
      result = true;
      replace = false;
      operationsWindow.textContent =
        operationsWindow.textContent + ` ${currentValue}`;
      // afficher le résultat de l'opération dans la fenêtre input
      inputWindow.textContent = isFloat(
        operate(previousOperator, previousValue, currentValue)
      );
    }
  })
);

inputBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    // boutons effacer ou remettre à 0
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
