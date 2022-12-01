const fs = require("fs");

export const day01CountCalories = () => {
  console.log("Day 01 - Puzzle 01");
  const data = fs
    .readFileSync("src/day-01/data.txt", "utf8")
    .toString()
    .split("\n");
  const elfes = [];
  let currentElf = 0;
  for (let i in data) {
    if (data[i] === "") {
      currentElf++;
    } else {
      const calories = parseInt(data[i]);
      elfes[currentElf] != null
        ? (elfes[currentElf] += calories)
        : (elfes[currentElf] = calories);
    }
  }
  // get the highest value in elfes array
  const highestCalories = Math.max(...elfes);
  console.log("highestCalories", highestCalories);
  let sortedElfes = elfes.sort((a, b) => b - a);
  console.log("sortedElfes", sortedElfes);
  const topThreeElfes = sortedElfes.slice(0, 3);
  const topThreeElfesSum = topThreeElfes.reduce((a, b) => a + b, 0);
  console.log("topThreeElfesSum", topThreeElfesSum);
  console.log("topThreeElfes", topThreeElfes);
};
