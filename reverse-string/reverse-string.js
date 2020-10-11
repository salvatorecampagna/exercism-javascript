export const reverseString = (s) =>
  (s === undefined || s.length <= 0) ?
    s : s.split("").reduce((rev, ch) => [ch].concat(rev)).join("");