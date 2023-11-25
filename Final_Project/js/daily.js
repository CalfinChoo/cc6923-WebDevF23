const ROWS = 3;
const COLS = 3;
const ROW_INDEX = 1;
const COL_INDEX = 2;

const currentDate = new Date();
const seed =
  currentDate.getFullYear() +
  "/" +
  (currentDate.getMonth() + 1) +
  "/" +
  currentDate.getDate();
Math.seedrandom(seed);

var squares, modal;
var activeSquares;
var numLives = 1;

const generateUniqueRandomKeys = (object, numberOfKeys) => {
  const uniqueKeys = new Set();
  const keys = Object.keys(object);

  while (uniqueKeys.size < numberOfKeys) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    if (!uniqueKeys.has(randomKey)) {
      uniqueKeys.add(randomKey);
    }
  }

  return Array.from(uniqueKeys);
};
const generatedKeys = generateUniqueRandomKeys(categories, ROWS + COLS);

const onStay = (e) => {
  let r = parseInt(e.target.id[ROW_INDEX]);
  let c = parseInt(e.target.id[COL_INDEX]);
  if (activeSquares[r][c] == 0) e.target.classList.add("selected");
};
const onExit = (e) => {
  let r = parseInt(e.target.id[ROW_INDEX]);
  let c = parseInt(e.target.id[COL_INDEX]);
  if (activeSquares[r][c] == 0) e.target.classList.remove("selected");
};
const openModal = (e) => {
  let r = parseInt(e.target.id[ROW_INDEX]);
  let c = parseInt(e.target.id[COL_INDEX]);
  $("#selectionModal").on("show.bs.modal", function (event) {
    var recipient = e.target.id;

    var modal = $(this);
    modal.find(".modal-title").text("New message to " + recipient);
    modal.find(".modal-body input").val(recipient);
  });
  if (activeSquares[r][c] == 0) $("#selectionModal").modal("toggle");
};

document.addEventListener("DOMContentLoaded", () => {
  squares = document.getElementsByClassName("square");
  modal = document.getElementById("myModal");
  cat_squares = document.getElementsByClassName("cat");
  lives = document.getElementById("lives");
  life_count = document.getElementById("life-count");

  activeSquares = Array(ROWS)
    .fill()
    .map(() => Array(COLS).fill(0));

  for (let i = 0; i < squares.length; ++i) {
    squares[i].addEventListener("mouseover", onStay);
    squares[i].addEventListener("mouseout", onExit);
    squares[i].addEventListener("click", openModal);
  }

  for (let i = 0; i < cat_squares.length; ++i) {
    console.log(cat_squares[i].innerHTML);
    if (categories[generatedKeys[i]].img) {
      const imgElement = document.createElement("img");
      imgElement.src = categories[generatedKeys[i]].img;
      imgElement.alt = categories[generatedKeys[i]].alt;
      cat_squares[i].appendChild(imgElement);
    } else {
      const spanElement = document.createElement("span");
      spanElement.innerHTML = categories[generatedKeys[i]].alt;
      spanElement.classList.add("pokefont");
      cat_squares[i].appendChild(spanElement);
    }
  }

  const heartImg = document.createElement("img");
  heartImg.src = "./img/heart.png";
  heartImg.height = 20;
  heartImg.width = 20;
  lives.appendChild(heartImg);
  life_count.innerHTML = numLives;
});
