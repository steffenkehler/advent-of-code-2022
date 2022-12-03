import fs from "fs";
export const day03Rucksack = () => {
  console.log("Day 03");
  const data = fs
    .readFileSync("src/day-03/data.txt", "utf8")
    .toString()
    .split("\n");
  interface StringMap {
    [key: string]: string;
  }
  interface NumberMap {
    [key: string]: number;
  }

  let rucksackSum: number = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (const i in data) {
    if (data[i] !== "") {
      const firstHalf: string = data[i].slice(0, data[i].length / 2);
      const secondHalf: string = data[i].slice(
        data[i].length / 2,
        data[i].length
      );
      const matchingLetter: string = firstHalf
        .split("")
        .filter((letter) => secondHalf.includes(letter))[0];
      const isUppercase: boolean =
        matchingLetter === matchingLetter.toUpperCase();
      const letterIndex: number =
        alphabet.indexOf(matchingLetter.toLowerCase()) + 1;
      const realValue = letterIndex + (isUppercase ? 26 : 0);
      rucksackSum += realValue;
    }
  }
  console.log("rucksackSum", rucksackSum);
};
