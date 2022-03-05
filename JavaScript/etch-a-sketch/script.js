let container = document.querySelector(".container");
const newGrid = document.querySelector(".grid");
const rainbow = document.querySelector(".rainbow");
const darker = document.querySelector(".darker");
const clear = document.querySelector(".clear");
let rbw = false;
let drk = false;

let grid = 16;

draw();

function draw() {
  for (let i = 0; i < grid * grid; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    const size = 550 / grid;
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
    square.style.backgroundColor = "white";
    container.append(square);
  }

  const squares = document.querySelectorAll(".square");
  const randomColor = Math.round(Math.random() * 255);

  clear.addEventListener("click", () =>
    squares.forEach((square) => (square.style.backgroundColor = "white"))
  );

  squares.forEach((square) => {
    square.addEventListener("mouseenter", function () {
      if (drk === true && rbw === false) {
        if (square.style.backgroundColor === "white")
          square.style.backgroundColor = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;
        else {
          const colorString = square.style.getPropertyValue("background-color");
          let [r, g, b] = colorString
            .slice(4, -1)
            .replaceAll(",", "")
            .split(" ");
          r *= 0.9;
          g *= 0.9;
          b *= 0.9;
          square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
      } else if (drk === false && rbw === true) {
        let randomColorR = Math.round(Math.random() * 255);
        let randomColorG = Math.round(Math.random() * 255);
        let randomColorB = Math.round(Math.random() * 255);
        let randomColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;
        square.style.backgroundColor = randomColor;
      }
    });
  });
}

newGrid.addEventListener("click", function () {
  const newGrid = Number(
    prompt(
      "Déterminez la nouvelle grille de dessin, en choisissant un chiffre entier entre 0 et 100"
    )
  );
  if (newGrid > 0 && newGrid < 100 && Number.isInteger(newGrid)) {
    container.remove();
    grid = newGrid;
    container = document.createElement("div");
    container.setAttribute("class", "container");
    document.querySelector("body").prepend(container);
    draw();
  } else alert("Il y a eu une erreur, choisissez un autre chiffre");
});

rainbow.addEventListener("click", () => {
  drk = false;
  rbw = true;
});

darker.addEventListener("click", () => {
  rbw = false;
  drk = true;
});
