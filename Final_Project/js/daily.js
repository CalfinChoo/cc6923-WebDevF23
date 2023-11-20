const ROWS = 3;
const COLS = 3;
const ROW_INDEX = 1;
const COL_INDEX = 2;
var squares, modal;
var activeSquares;

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
    if (activeSquares[r][c] == 0) $('#selectionModal').modal('toggle');
};

document.addEventListener('DOMContentLoaded', () => {
    squares = document.getElementsByClassName("square");
    modal = document.getElementById("myModal");

    activeSquares = Array(ROWS).fill().map(() => Array(COLS).fill(0));
    
    for (let i = 0; i < squares.length; ++i) {
        squares[i].addEventListener("mouseover", onStay);
        squares[i].addEventListener("mouseout", onExit);
        squares[i].addEventListener("click", openModal);
    }
    
    
})