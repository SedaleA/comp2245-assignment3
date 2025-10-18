document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");
  const players = ["X", "O"];
  let currentplayer = players[0];

  squares.forEach((square) => {
    square.classList.add("square");
    square.addEventListener("mouseenter", () => square.classList.add("hover"));
    square.addEventListener("mouseleave", () =>
      square.classList.remove("hover")
    );
    square.addEventListener("click", () => {
      if (square.textContent !== "") return;

      square.textContent = currentplayer;
      square.classList.add(currentplayer);
      currentplayer = currentplayer === "X" ? "O" : "X";
    });
  });
});
