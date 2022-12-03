import fs from "fs";
export const day02RPS = () => {
  console.log("Day 02");
  const data = fs
    .readFileSync("src/day-02/data.txt", "utf8")
    .toString()
    .split("\n");
  interface StringMap {
    [key: string]: string;
  }
  interface NumberMap {
    [key: string]: number;
  }
  const opponentInputs: StringMap = {
    A: "Rock",
    B: "Paper",
    C: "Scissors",
  };
  const playerInputs: StringMap = {
    X: "Rock",
    Y: "Paper",
    Z: "Scissors",
  };
  let totalPlayerScore = 0;
  let totalPlayerScorePuzzle2 = 0;
  const points: NumberMap = {
    Rock: 1,
    Paper: 2,
    Scissors: 3,
  };
  const extraPoints: NumberMap = {
    Lost: 0,
    Draw: 3,
    Won: 6,
  };
  const results: StringMap = {
    RockRock: "Draw",
    RockPaper: "Lost",
    RockScissors: "Won",
    PaperRock: "Won",
    PaperPaper: "Draw",
    PaperScissors: "Lost",
    ScissorsRock: "Lost",
    ScissorsPaper: "Won",
    ScissorsScissors: "Draw",
  };
  interface WinLoose {
    [key: string]: StringMap;
  }
  const winLooseDecision: WinLoose = {
    X: {
      // Loose
      A: "Scissors",
      B: "Rock",
      C: "Paper",
    },
    Y: {
      // Draw
      A: "Rock",
      B: "Paper",
      C: "Scissors",
    },
    Z: {
      // Win
      A: "Paper",
      B: "Scissors",
      C: "Rock",
    },
  };
  for (const i in data) {
    const [opponent, player] = data[i].split(" ");
    if (opponent != "" && player != "") {
      const opponentInput = opponentInputs[opponent];
      const playerInput = playerInputs[player];
      const p2Input = winLooseDecision[player][opponent];
      if (
        typeof opponentInput !== "undefined" &&
        typeof playerInput !== "undefined" &&
        typeof p2Input !== "undefined"
      ) {
        const result = extraPoints[results[`${playerInput}${opponentInput}`]];
        const p2Result = extraPoints[results[`${p2Input}${opponentInput}`]];
        totalPlayerScorePuzzle2 += points[p2Input] + p2Result;
        totalPlayerScore += points[playerInput] + result;
      }
    }
  }
  console.log("totalPlayerScore", totalPlayerScore);
  console.log("totalPlayerScorePuzzle2", totalPlayerScorePuzzle2);
};
