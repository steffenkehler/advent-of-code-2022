export const drawAChristmasTree = (height: number, currentDay: number) => {
  let tree = "";
  for (let i = 0; i < height; i++) {
    const color = i + 1 > height - currentDay ? "\x1b[37m" : "\x1b[32m";
    tree += color;
    tree += " ".repeat(height - i);
    tree += "*".repeat(i * 2 + 1);
    tree += " ".repeat(height - i);
    tree += "\n";
  }
  return tree;
};
