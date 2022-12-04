import { day0Challenge } from "./00";
import { day01CountCalories } from "./day-01/puzzle01";
import { day02RPS } from "./day-02/puzzle01";
import { day03Rucksack } from "./day-03/puzzle01";
import { drawAChristmasTree } from "./helpers/drawTree";
const args = process.argv;

const day = args[2].split("=")[1];
const MAX_DAYS = 25;
const initAdventOfCode = () => {
  console.log(`Advent of Code 2022 \nDAY [${day}/${MAX_DAYS}]`);
  console.log(drawAChristmasTree(25, parseInt(day)));
  switch (day) {
    case "1":
      day01CountCalories();
      break;
    case "2":
      day02RPS();
      break;
    case "3":
      day03Rucksack();
      break;
    default:
      console.log("Day 1");
  }
};
initAdventOfCode();
