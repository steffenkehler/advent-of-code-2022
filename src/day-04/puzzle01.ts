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
  data.forEach((line: string, index: number) => {
    console.log(index, line);
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
  });
  console.log("uselessElfes", uselessElfes);
};
