import { warn } from "console";
import fs from "fs";
export const day04Cleanup = () => {
  console.log("Day 04");
  const data = fs
    .readFileSync("src/day-04/data.txt", "utf8")
    .toString()
    .split("\n");
  interface StringMap {
    [key: string]: string;
  }
  interface NumberMap {
    [key: string]: number;
  }
  data.pop();
  let uselessElfes = 0;
  let overlappingElfes = 0;
  data.forEach((line: string, index: number) => {
    const [firstElf, secondElf] = line.split(",");
    const [firstStart, firstEnd] = firstElf.split("-").map((x) => parseInt(x));
    const [secondStart, secondEnd] = secondElf
      .split("-")
      .map((x) => parseInt(x));
    if (
      (firstStart <= secondStart && firstEnd >= secondEnd) ||
      (secondStart <= firstStart && secondEnd >= firstEnd)
    ) {
      uselessElfes += 1;
    }
    // get the all elfes that are overlapping
    if (
      firstEnd < secondStart ||
      secondEnd < firstStart ||
      secondStart > firstEnd
    ) {
      // no overlap
    } else {
      overlappingElfes += 1;
    }
  });
  console.log("uselessElfes", uselessElfes);
  console.log("overlappingElfes", overlappingElfes);
};
