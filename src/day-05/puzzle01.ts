import { warn } from "console";
import fs from "fs";
export const day05SupplyStacks = () => {
  console.log("Day 05");
  const data = fs
    .readFileSync("src/day-05/data.txt", "utf8")
    .toString()
    .split("\n");
  interface StringMap {
    [key: string]: string;
  }
  interface NumberMap {
    [key: string]: number;
  }
  data.pop();
  interface StackType {
    [key: number]: string[];
  }
  const stacks: any[] = [];
  data.forEach((line: string, index: number) => {
    // first ten lines are the rules
    if (index < 8) {
      let currentStack = 1;
      line.split("").map((char: string, index: number) => {
        if (index % 4 === 1) {
          if (!stacks[currentStack]) {
            stacks[currentStack] = [];
          }
          if (char !== " ") {
            stacks[currentStack] = [char, ...stacks[currentStack]];
          }
          currentStack++;
        }
      });
    }
    if (index > 9) {
      // get all numbers from string as array
      const numbers = line.match(/\d+/g);
      if (numbers) {
        for (let i = 0; i < parseInt(numbers[0]); i++) {
          const topCard = stacks[parseInt(numbers[1])].pop();
          stacks[parseInt(numbers[2])] = [
            ...stacks[parseInt(numbers[2])],
            topCard,
          ];
        }
      }
    }
  });
  console.log(
    stacks.map((stack) => stack.pop()).reduce((acc, curr) => acc + curr, "")
  );
};
