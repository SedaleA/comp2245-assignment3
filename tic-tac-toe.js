document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");
  const players = ["X", "O"];
  let currentplayer = players[0];
  const getStatus = document.getElementById("status");
  const reset = document.querySelector(".btn");

  const winn_con = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  reset.addEventListener("click", () => {
    getStatus.classList.remove("you-won");
    squares.forEach((square) => {
      square.textContent = "";
      square.classList.remove("X", "O");
    });
    currentplayer = players[0];
    getStatus.textContent =
      "Move your mouse over a square and click to play an X or an O.";
  });

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

      if (Winner()) {
        getStatus.textContent = `Nice ${currentplayer} wins`;
        getStatus.classList.add("you-won");
        return;
      }

      currentplayer = currentplayer === "X" ? "O" : "X";
    });
  });

  function Winner() {
    for (let i = 0; i < winn_con.length; i++) {
      const [a, b, c] = winn_con[i];
      if (
        squares[a].textContent === currentplayer &&
        squares[b].textContent === currentplayer &&
        squares[c].textContent === currentplayer
      ) {
        return true;
      }
    }
    return false;
  }
});
