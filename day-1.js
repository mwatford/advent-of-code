const r = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;
const numArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const findMatches = (s) => s.match(r);

const parseNum = (s) => {
    const a = parseInt(s);
    if (!isNaN(a)) return s;

    return `${numArr.findIndex((el) => el === s) + 1}`;
};

const fs = require("fs");
const inputOne = fs.readFileSync("./day-1/input-2.txt", "utf-8");

const calcLine = (input) =>
  input
    .map(str => [str, findMatches(str)])
    .map(([str, arr]) => [str, parseNum(arr.at(0)), parseNum(arr.at(-1))])
    .map((el) => el.join(""))
    .reduce((acc, val) => parseInt(acc) + parseInt(val));

console.log(calcLine(inputOne.split('\n')))