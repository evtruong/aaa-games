const playBoard = document.querySelector(".play-board");

let foodX = 13, foodY = 10;

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX} "></div>`;
    playBoard.innerHTML = htmlMarkup;
}
initGame()
//grid-area is a shorthand property that sets values for grid item's start and endlines for both the row and column.