import fs from "fs";
export const day05SupplyStacks = () => {
  console.log("Day 05");
  const data = fs
    .readFileSync("src/day-05/data.txt", "utf8")
    .toString()
    .split("\n");
  data.pop();
  const stacks: any[][] = [];
  const stacks9001: any[][] = [];
  data.forEach((line: string, index: number) => {
    // first ten lines are the rules
    if (index < 8) {
      let currentStack = 0;
      line.split("").map((char: string, index: number) => {
        if (index % 4 === 1) {
          if (!stacks[currentStack]) {
            stacks[currentStack] = [];
            stacks9001[currentStack] = [];
          }
          if (char !== " ") {
            stacks[currentStack] = [char, ...stacks[currentStack]];
            stacks9001[currentStack] = [char, ...stacks9001[currentStack]];
          }
          currentStack++;
        }
      });
    }
    if (index > 9) {
      // get all numbers from string as array
      const numbers = line.match(/\d+/g);
      if (numbers) {
        const amount = parseInt(numbers[0]);
        const fromStack = parseInt(numbers[1]) - 1;
        const toStack = parseInt(numbers[2]) - 1;
        // multiple cards for puzzle 2
        const topCards = stacks9001[fromStack].slice(
          stacks9001[fromStack].length - amount
        );
        for (let i = 0; i < amount; i++) {
          if (stacks9001[fromStack].length > 0) {
            const topCard = stacks[fromStack].pop();
            stacks9001[fromStack].pop();
            stacks[toStack] = [...stacks[toStack], topCard];
          }
        }
        // part 2

        stacks9001[toStack] = [...stacks9001[toStack], ...topCards];
      }
    }
  });
  console.log(
    "Puzzle 01 Solution is: ",
    stacks
      .map((stack: string[]) => stack.pop())
      .reduce((acc: any, curr: any) => acc + curr, "")
  );
  console.log(stacks);
  console.log(
    "Puzzle 02 Solution is: ",
    stacks9001
      .map((stack: string[]) => stack.pop())
      .reduce((acc: any, curr: any) => acc + curr, "")
  );
};
