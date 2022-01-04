/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */

// function sumPairs(A, N) {
//   const pairs = {};
//   const solution = []
//   for (let e of A) {
//     const diff = N - e;
//     if (pairs[e]) {
//       solution.push([diff, e]);
//     }
//     else pairs[diff] = true;
//   }
//   return solution;
// }

function sumPairs(A, N) {
  const numbers = new Map();
  const solution = new Map();

  for (let e of A) {
    numbers.set(e);
  }

  for (let e of A) {
    const diff = N - e;

    if (diff !== e) {
      if (numbers.has(diff)) {
        const small = Math.min(e, diff);
        const big = Math.max(e, diff);
        solution.set(small, big);
      }
    }
  }

  return [...solution]
}

module.exports = sumPairs;
