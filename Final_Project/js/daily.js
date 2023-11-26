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

var squares, modal, cat_squares, lives, life_count, list, search;
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

const formatName = (name) => {
  function replaceDashes(inputString) {
    const words = inputString.split("-");
    const capitalizedWords = words.map((word) => {
      if (word.length > 0 && /[a-zA-Z]/.test(word[0])) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
    const resultString = capitalizedWords.join(" ");
    return resultString;
  }

  let out = name.charAt(0).toUpperCase() + name.slice(1);
  return replaceDashes(out);
};

const containsSubsequence = (inputString, targetSet) => {
  function isSubsequence(str, targetSet) {
    return str.split("").every((char) => targetSet.has(char));
  }
  const end = Math.max(3, targetSet.length);
  const setChars = new Set(targetSet);
  for (let i = 0; i < inputString.length - (end - 1); i++) {
    const subsequence = inputString.substring(i, i + end);
    //console.log(subsequence);
    if (isSubsequence(subsequence, setChars)) {
      return true;
    }
  }
  return false;
};

const sortArr = (arr, targetSet) => {
  function calculateMatchScore(str) {
    let exactMatchScore = 0;
    let matchingOrderScore = 0;

    const index = str.indexOf(targetSet);
    if (index !== -1) {
      exactMatchScore++;
      matchingOrderScore += index;
    }

    return [exactMatchScore, matchingOrderScore];
  }

  function sortByMatchScore(a, b) {
    const [exactMatchScoreA, matchingOrderScoreA] = calculateMatchScore(
      monData[a].name
    );
    const [exactMatchScoreB, matchingOrderScoreB] = calculateMatchScore(
      monData[b].name
    );

    if (exactMatchScoreB !== exactMatchScoreA) {
      return exactMatchScoreB - exactMatchScoreA;
    }
    if (matchingOrderScoreB !== matchingOrderScoreA) {
      return matchingOrderScoreA - matchingOrderScoreB;
    }
    return 0;
  }

  return arr.sort(sortByMatchScore);
};

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
  $("#selectionModal").on("show.bs.modal", function () {
    list.innerHTML = "";
    var recipient = e.target.id;

    var modal = $(this);

    modal
      .find(".modal-cat")
      .text(generatedKeys[COLS + r] + "/" + generatedKeys[c]);
    modal.find(".modal-body input").attr("placeholder", "Search Pokémon...");
    modal.find(".modal-body input").val("");
  });
  if (activeSquares[r][c] == 0) $("#selectionModal").modal("toggle");
};
const updateList = (e) => {
  list.innerHTML = "";
  let arr = [];
  for (let i = 0; i < monData.length; ++i) {
    if (
      excludeSet.has(monData[i].name) ||
      !containsSubsequence(monData[i].name, e.target.value)
    )
      continue;
    arr.push(i);
  }
  arr = sortArr(arr, e.target.value);
  for (let i of arr) {
    const liElement = document.createElement("li");
    liElement.classList.add(...liClassList);
    liElement.id = monData[i].name;

    const divElement = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = monData[i].frontImage
      ? monData[i].frontImage
      : "./img/unknown.png";
    imgElement.alt = monData[i].name;
    imgElement.height = 48;
    imgElement.width = 48;
    const spanElement = document.createElement("span");
    spanElement.classList.add(...liSpanClassList);
    spanElement.innerHTML = formatName(monData[i].name);
    divElement.appendChild(imgElement);
    divElement.appendChild(spanElement);

    const buttonElement = document.createElement("button");
    buttonElement.classList.add(...liButtonClassList);
    buttonElement.type = "button";
    buttonElement.innerHTML = "<strong>Select</strong>";

    liElement.appendChild(divElement);
    liElement.appendChild(buttonElement);
    list.appendChild(liElement);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  squares = document.getElementsByClassName("square");
  modal = document.getElementById("myModal");
  cat_squares = document.getElementsByClassName("cat");
  lives = document.getElementById("lives");
  life_count = document.getElementById("life-count");
  list = document.getElementById("list");
  search = document.getElementById("searchBar");

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

  search.addEventListener("input", updateList);
  //console.log(monData);
});
