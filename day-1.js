const r = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/gi;
const numArr = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const findMatches = (s) => Array.from(s.matchAll(r), (match) => match.at(1));

const parseNum = (s) => {
  if (parseInt(s)) return s;

  return `${numArr.findIndex((el) => el === s) + 1}`;
};

const fs = require("fs");
const inputOne = fs.readFileSync("./day-1/input-2.txt", "utf-8");

const calcLine = (input) => {
  const matches = findMatches(input);
  return parseNum(matches.at(0)) + parseNum(matches.at(-1));
};

const result = inputOne
  .split("\n")
  .map(calcLine)
  .reduce((acc, val) => parseInt(acc) + parseInt(val), 0);

console.log(result);
