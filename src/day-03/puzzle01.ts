import { warn } from "console";
import fs from "fs";
export const day03Rucksack = () => {
  console.log("Day 03");
  let data = fs
    .readFileSync("src/day-03/data.txt", "utf8")
    .toString()
    .split("\n");
  interface StringMap {
    [key: string]: string;
  }
  interface NumberMap {
    [key: string]: number;
  }
  data.pop();
  let rucksackSum = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let groupBadgeSum = 0;
  for (const i in data) {
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
    const index: number = parseInt(i);
    // second puzzle
    if (index % 3 === 0) {
      console.log(index);
      const [first, second, third] = data.slice(index, index + 3);
      // find matching char in all three strings
      const groupMatchingLetter: string = first.split("").filter((letter) => {
        return second.includes(letter) && third.includes(letter);
      })[0];
      console.log(groupMatchingLetter);
      const groupLetterIndex = alphabet.indexOf(
        groupMatchingLetter.toLowerCase()
      );
      const realGroupLetterValue = groupLetterIndex + 1;
      groupBadgeSum +=
        realGroupLetterValue +
        (groupMatchingLetter === groupMatchingLetter.toUpperCase() ? 26 : 0);
    }
  }
  console.log("rucksackSums", rucksackSum);
  console.log("number of items", data.length);
  console.log("groupBadgeSum", groupBadgeSum);
};
