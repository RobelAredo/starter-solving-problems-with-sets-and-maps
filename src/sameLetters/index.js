/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  const results = new Map();

  for (let word of words) {
    const key = [... new Set(word.toLowerCase())].sort().join("");

    if (!results.has(key)) results.set(key, [word]);
    else results.get(key).push(word);
  }

  return results;
}

module.exports = sameLetters;
