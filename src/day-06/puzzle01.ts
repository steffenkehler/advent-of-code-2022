import fs from "fs";
export const day06TurningTrouble = () => {
  console.log("Day 06");
  const data: string = fs
    .readFileSync("src/day-06/data.txt", "utf8")
    .toString();
  console.log(data);
  // find four different characters in a row in data string and return the index of the last one
  const findFourInARow = (data: string) => {
    let index = 0;
    const sequence: string[] = [];
    while (index < data.length) {
      console.log(index);
      // check if current char is already in sequence, if not add it
      if (!sequence.includes(data[index])) {
        sequence.push(data[index]);
        console.log("adding", data[index], "to sequence", sequence);
      } else {
        // if it is already in sequence, shift sequence
        while (sequence.includes(data[index])) {
          sequence.shift();
        }
        sequence.push(data[index]);
        console.log("sequence", sequence, "already contains", data[index]);
      }
      const checkSequence = new Set(sequence);
      if (checkSequence.size === 4) {
        console.log(sequence);
        return index + 1;
      }
      index++;
    }
    return -1;
  };
  console.log("Puzzle 01 Solution is: ", findFourInARow(data));
  console.log("Puzzle 02 Solution is: ");
};
