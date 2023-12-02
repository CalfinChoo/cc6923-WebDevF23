const ROW_INDEX = 1;
const COL_INDEX = 2;

var ROWS, COLS;
var allowMonotype, allowMega, allowGMAX;
var squares,
  modal,
  cat_squares,
  lives,
  life_count,
  list,
  search,
  grid,
  row_cats,
  col_cats;
var seconds, timerInterval;
var activeSquares;
var generatedKeys;

var used = new Set([]);
var currRow, currCol;
var numLives = 1;
var correct = 0;

var selected_rows = [];
var selected_cols = [];
var exclude_rows = {};
var exclude_cols = {};

const generateUniqueRandomKeys = (object) => {
  var out = [];
  var keys = Object.keys(object);

  var ind;
  if (!allowMonotype) {
    ind = keys.indexOf("Monotype");
    if (ind !== -1) {
      keys.splice(ind, 1);
    }
  }
  if (!allowMega) {
    ind = keys.indexOf("Mega");
    if (ind !== -1) {
      keys.splice(ind, 1);
    }
  }
  if (!allowGMAX) {
    ind = keys.indexOf("GMAX");
    if (ind !== -1) {
      keys.splice(ind, 1);
    }
  }

  for (let i = 0; i < COLS; ++i) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    out.push(randomKey);
    keys.splice(randomIndex, 1);
  }
  for (let key of out) {
    if (!excludeCombos.hasOwnProperty(key)) continue;
    for (let type of excludeCombos[key]) {
      const index = keys.indexOf(type);
      if (index !== -1) {
        keys.splice(index, 1);
      }
    }
  }
  for (let i = 0; i < ROWS; ++i) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    out.push(randomKey);
    keys.splice(randomIndex, 1);
  }

  return out;
};

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
      ++exactMatchScore;
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

const updateGameState = () => {
  if (numLives === 0) {
    clearInterval(timerInterval);
    $("#summaryModal").on("show.bs.modal", function () {
      var modal = $(this);
      modal.find(".modal-title").text("Puzzle Summary");
      modal
        .find(".modal-body")
        .prepend('<img class="summaryImg" src="./img/loser.jpg"/>')
        .prepend('<h5 class="text-center">Refresh the page to play again!</h5>')
        .prepend('<h5 class="text-center">You have run out of guesses!</h5>')
        .prepend('<h4 class="text-center">You Lost!</h4>');
    });
    $("#summaryModal").modal("toggle");
  } else if (correct === ROWS * COLS) {
    clearInterval(timerInterval);
    $("#summaryModal").on("show.bs.modal", function () {
      var modal = $(this);
      modal.find(".modal-title").text("Puzzle Summary");
      modal
        .find(".modal-body")
        .prepend('<img class="summaryImg" src="./img/winner.png"/>')
        .prepend('<h5 class="text-center">Refresh the page to play again!</h5>')
        .prepend(
          '<h5 class="text-center">You have solved the puzzle in ' +
            formatTime(seconds) +
            "!</h5>"
        )
        .prepend('<h4 class="text-center">You Won!</h4>');
    });
    $("#summaryModal").modal("toggle");
  }
};

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");

  return formattedTime;
};

const updateTimer = () => {
  seconds++;
  document.getElementById("timer").innerText = formatTime(seconds);
};

const onStay = (square) => {
  let r = parseInt(square.id[ROW_INDEX]);
  let c = parseInt(square.id[COL_INDEX]);
  if (activeSquares[r][c] == 0 && numLives !== 0)
    square.classList.add("selected");
};
const onExit = (square) => {
  let r = parseInt(square.id[ROW_INDEX]);
  let c = parseInt(square.id[COL_INDEX]);
  if (activeSquares[r][c] == 0 && numLives !== 0)
    square.classList.remove("selected");
};
const openModal = (square) => {
  let r = parseInt(square.id[ROW_INDEX]);
  let c = parseInt(square.id[COL_INDEX]);
  if (activeSquares[r][c] !== 0 || numLives === 0) return;
  currRow = r;
  currCol = c;
  $("#selectionModal").on("show.bs.modal", function () {
    list.innerHTML = "";

    var modal = $(this);
    modal.find(".modal-title").text("Make Your Guess");
    modal
      .find(".modal-cat")
      .text(generatedKeys[COLS + currRow] + "/" + generatedKeys[currCol]);
    modal.find(".modal-body input").attr("placeholder", "Search Pokémon...");
    modal.find(".modal-body input").val("");
    setTimeout(function () {
      modal.find(".modal-body input").focus();
    }, 500);
  });
  $("#selectionModal").modal("toggle");
};
const handleSelect = (i) => {
  $("#selectionModal").modal("toggle");
  let cats = [generatedKeys[COLS + currRow], generatedKeys[currCol]];
  var incorrect;
  for (let cat of cats) {
    incorrect = true;
    switch (categories[cat].type) {
      case "mega":
        if (/-mega(-x|-y)?$/.test(monData[i].name)) incorrect = false;
        break;
      case "gmax":
        if (monData[i].name.endsWith("-gmax")) incorrect = false;
        break;
      case "monotype":
        if (monData[i].types.length === 1) incorrect = false;
        break;
      case "type":
        for (let type of monData[i].types) {
          if (type.type.name.toLowerCase() === cat.toLowerCase())
            incorrect = false;
        }
        break;
    }
    if (incorrect) {
      //console.log("Incorrect");
      numLives = numLives - 1 < 0 ? 0 : numLives - 1;
      life_count.innerHTML = numLives;
      break;
    }
  }
  if (!incorrect) {
    var target = document.getElementById("b" + currRow + currCol);
    activeSquares[currRow][currCol] = 1;
    ++correct;
    used.add(monData[i].name);

    const imgElement = document.createElement("img");
    imgElement.src = monData[i].frontImage;
    imgElement.alt = monData[i].name;
    const spanElement = document.createElement("span");
    spanElement.innerHTML =
      "<strong>" + formatName(monData[i].name) + "</strong>";
    spanElement.classList.add(...nameBanner);
    target.appendChild(imgElement);
    target.appendChild(spanElement);
  }
  updateGameState();
};
const updateList = (e) => {
  list.innerHTML = "";
  let arr = [];
  for (let i = 0; i < monData.length; ++i) {
    if (
      excludeSet.has(monData[i].name) ||
      !containsSubsequence(
        monData[i].name.toLowerCase(),
        e.target.value.toLowerCase()
      )
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
    buttonElement.disabled = used.has(monData[i].name);
    buttonElement.addEventListener("click", () => {
      handleSelect(i);
    });

    liElement.appendChild(divElement);
    liElement.appendChild(buttonElement);
    list.appendChild(liElement);
  }
};

const selectForm = (formId) => {
  var formContainer = document.getElementById("switch");
  var form1 = document.getElementById("form1");
  var form2 = document.getElementById("form2");

  if (formId === "form1") {
    form1.style.display = "flex";
    form2.style.display = "none";
  } else {
    form1.style.display = "none";
    form2.style.display = "flex";
  }

  var buttons = formContainer.getElementsByClassName("btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("btn-dark");
  }

  document.getElementById(formId + "-btn").classList.add("btn-dark");
};

const restrictInput = (input) => {
  if (parseInt(input.value) < 1) input.value = 1;
  else if (parseInt(input.value) > 5) input.value = 5;
};

const submit = (formNum) => {
  if (formNum === 1 || formNum === 2) {
    numLives =
      formNum === 1
        ? parseInt(document.getElementById("lives1").value)
        : parseInt(document.getElementById("lives2").value);
    ROWS =
      formNum === 1
        ? parseInt(document.getElementById("rows").value)
        : selected_rows.length;
    COLS =
      formNum === 1
        ? parseInt(document.getElementById("cols").value)
        : selected_cols.length;
    allowMonotype = document.getElementById("allowMonotype").checked;
    allowMega = document.getElementById("allowMega").checked;
    allowGMAX = document.getElementById("allowGMAX").checked;

    grid.style.width = Math.min((COLS + 2) * 100, 700).toString() + "px";

    const livesDivElement = document.createElement("div");
    livesDivElement.classList.add("col", "p-0");
    livesDivElement.id = "lives";
    const livesSpanElement = document.createElement("span");
    livesSpanElement.classList.add("pokefont", "px-2");
    livesSpanElement.id = "life-count";
    livesDivElement.appendChild(livesSpanElement);

    var catId = 0;
    for (let i = 0; i < ROWS + 1; ++i) {
      const rowDivElement = document.createElement("div");
      rowDivElement.classList.add("row", "no-gutters");
      rowDivElement.style.width = (100 * (COLS + 2)).toString() + "px";
      const divElement = document.createElement("div");
      divElement.classList.add("col", "p-0");
      for (let j = 0; j < COLS + 1; ++j) {
        const catDivElement = document.createElement("div");
        catDivElement.classList.add("cat", "col", "p-0");
        const squareDivElement = document.createElement("div");
        squareDivElement.classList.add("square", "col", "p-0");
        if (i === 0) {
          if (j == 0) {
            livesDivElement.classList.add("lives-stick");
            rowDivElement.appendChild(livesDivElement);
          } else {
            catDivElement.id = "cat" + (catId++).toString();
            catDivElement.classList.add("cat-tstick", "sticky-top");
            rowDivElement.appendChild(catDivElement);
          }
        } else {
          if (j == 0) {
            catDivElement.id = "cat" + catId++;
            catDivElement.classList.add("cat-lstick");
            rowDivElement.appendChild(catDivElement);
          } else {
            squareDivElement.id = "b" + (i - 1).toString() + (j - 1).toString();
            rowDivElement.appendChild(squareDivElement);
          }
        }
      }
      rowDivElement.appendChild(divElement);
      grid.appendChild(rowDivElement);
    }
    generatedKeys =
      formNum === 1
        ? generateUniqueRandomKeys(categories)
        : [...selected_cols, ...selected_rows];
  }
  //console.log(generatedKeys);
  setup();
  $("#settingsModal").modal("toggle");
};

const setup = () => {
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
    squares[i].addEventListener("mouseover", () => {
      onStay(squares[i]);
    });
    squares[i].addEventListener("mouseout", () => {
      onExit(squares[i]);
    });
    squares[i].addEventListener("click", () => {
      openModal(squares[i]);
    });
  }

  for (let i = 0; i < cat_squares.length; ++i) {
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

  seconds = 0;
  timerInterval = setInterval(updateTimer, 1000);
};

const handleCheckboxChange = (e) => {
  //console.log(e)
  //console.log(e.target.checked);
  if (e.target.id.includes("row-")) {
    if (e.target.checked) {
      selected_rows.push(e.target.value);
      if (e.target.value in excludeCombos)
        exclude_cols[e.target.value] = excludeCombos[e.target.value];
    } else {
      const index = selected_rows.indexOf(e.target.value);
      if (index !== -1) {
        selected_rows.splice(index, 1);
      }
      delete exclude_cols[e.target.value];
    }
  } else if (e.target.id.includes("col-")) {
    if (e.target.checked) {
      selected_cols.push(e.target.value);
      if (e.target.value in excludeCombos)
        exclude_rows[e.target.value] = excludeCombos[e.target.value];
    } else {
      const index = selected_cols.indexOf(e.target.value);
      if (index !== -1) {
        selected_cols.splice(index, 1);
      }
      delete exclude_rows[e.target.value];
    }
  }

  Object.keys(categories).forEach((key) => {
    document.getElementById("row-" + key).disabled = false;
    document.getElementById("col-" + key).disabled = false;
  });
  Object.keys(exclude_rows).forEach((key) => {
    for (let cat of exclude_rows[key]) {
      document.getElementById("row-" + cat).disabled = true;
    }
  });
  Object.keys(exclude_cols).forEach((key) => {
    for (let cat of exclude_cols[key]) {
      document.getElementById("col-" + cat).disabled = true;
    }
  });

  document.getElementById("selection-rows").innerHTML =
    selected_rows.toString();
  document.getElementById("selection-cols").innerHTML =
    selected_cols.toString();

  document.getElementById("start2").disabled = !(
    selected_rows.length > 0 && selected_cols.length > 0
  );
};

document.addEventListener("DOMContentLoaded", () => {
  function createCheckbox(rc, value) {
    const divElement = document.createElement("div");
    divElement.classList.add("form-check");

    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = rc + value;
    inputElement.value = value;
    inputElement.classList.add("form-check-input");
    inputElement.addEventListener("change", handleCheckboxChange);

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", rc + value);
    labelElement.classList.add("form-check-label");
    labelElement.innerHTML = value;

    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);
    return divElement;
  }

  grid = document.getElementById("grid");
  row_cats = document.getElementById("row-cats");
  col_cats = document.getElementById("col-cats");
  $("#settingsModal").on("show.bs.modal", function () {
    var modal = $(this);
    modal.find(".modal-title").text("Custom Puzzle Settings");
    modal.find(".modal-body");
  });
  $("#settingsModal").modal("toggle");
  selectForm("form1");

  var cats = Object.keys(categories);
  for (let cat of cats) {
    row_cats.appendChild(createCheckbox("row-", cat));
    col_cats.appendChild(createCheckbox("col-", cat));
  }
});
