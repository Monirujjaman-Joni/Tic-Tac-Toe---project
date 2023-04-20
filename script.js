
    var spaces = Array.from(document.getElementsByClassName("b1"));
    function onc() {
      document.getElementById("play_freind").innerHTML =
        "Game started! click on the boxes";
    }

    let playerText = document.getElementById("h1");
    const text1 = "X";
    const text2 = "O";
    var pf = text1;
    var emptSpaces = Array(9).fill(null);
    let winner_indicator = getComputedStyle(document.body).getPropertyValue(
      "--winstyle"
    );
    function gamestart(j) {
      if (j == true) {
        for (i = 0; i <= 8; i++) {
          spaces.forEach((space) =>
            space.addEventListener("click", spaceclicked)
          );
        }
      } else if (j == false) {
        for (i = 0; i <= 8; i++) {
          spaces.forEach((space) =>
            space.removeEventListener("click", spaceclicked)
          );
        }
      }
    }
    function spaceclicked(e) {
      const i = e.target.id;
      if (!emptSpaces[i]) {
        emptSpaces[i] = pf;
        e.target.innerText = pf;
        if (playerwon() !== false) {
          playerText.innerHTML = pf + " has won";
          let winning_sections = playerwon();
          winning_sections.map(
            (section) =>
              (spaces[section].style.backgroundColor = winner_indicator)
          );
          function gameOff() {
            gamestart(false);
          }
          gameOff();
        }
        pf = pf == text1 ? text2 : text1;
      }
    }
    const winning_combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    function playerwon() {
      for (const condition of winning_combinations) {
        let [a, b, c] = condition;
        if (
          emptSpaces[a] &&
          emptSpaces[a] == emptSpaces[b] &&
          emptSpaces[a] == emptSpaces[c]
        ) {
          return [a, b, c];
        }
      }
      return false;
    }
    var restart_Button = document.getElementById("rsetBtn");
    restart_Button.addEventListener("click", rset);
    function rset() {
      emptSpaces.fill(null);

      spaces.forEach((space) => {
        space.innerText = "";
        space.style = "";
      });

      playerText.innerHTML = "Tic Tac Toe";
        pf = text1;
        gamestart(true);
    }



