function intersection(a, b) {
  const map = new Map();
  const set = new Set();

  for (let e of a) {
    map.set(e);
  }

  for (let e of b) {
    if (map.has(e)) set.add(e);
  }
  
  return [...set];
}

module.exports = intersection;
