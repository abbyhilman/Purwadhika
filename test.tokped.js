"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'segment' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER x
 *  2. INTEGER_ARRAY arr
 */

function segment(x, arr) {
  // Write your code here
  let temp;
  var max = 0;
  for (var i = 0; i < arr.length - x; i++) {
    temp = arr.slice(i, i + x);
    let min = temp.reduce(function (a, b) {
      return Math.min(a, b);
    });
    max = min > max ? min : max;
  }

  return max;
}

function firstRepeatedWord(sentence) {
  // Write your code here
  const arr = sentence.split(/\W+/g);
  return arr.find((word, index) => arr.slice(0, index).includes(word));
}

// Javascript program to count number of
// substrings with counts of distinct
// characters as k.
let MAX_CHAR = 26;

// Returns true if all values
// in freq[] are either 0 or k.
function check(freq, k) {
  for (let i = 0; i < MAX_CHAR; i++)
    if (freq[i] != 0 && freq[i] != k) return false;

  return true;
}

// Returns count of substrings where frequency
// of every present character is k
function substrings(s, k) {
  // Initialize result
  let res = 0;

  // Pick a starting point
  for (let i = 0; i < s.length; i++) {
    // Initialize all frequencies as 0
    // for this starting point
    let freq = new Array(MAX_CHAR);
    for (let i = 0; i < freq.length; i++) {
      freq[i] = 0;
    }

    // One by one pick ending points
    for (let j = i; j < s.length; j++) {
      // Increment frequency of current char
      let index = s[j].charCodeAt(0) - "a".charCodeAt(0);
      freq[index]++;

      // If frequency becomes more than
      // k, we can't have more substrings
      // starting with i
      if (freq[index] > k) break;
      // If frequency becomes k, then check
      // other frequencies as well.
      else if (freq[index] == k && check(freq, k) == true) res++;
    }
  }
  return res;
}

console.log(substrings("111223344", 2));
