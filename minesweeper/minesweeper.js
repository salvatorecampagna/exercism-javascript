const mine = (input, row, col) =>
  input[row].charAt(col) === '*';

const neighbors = (input, row, col) => {
  const rows = input.length;
  const cols = input[0].length;
  const deltas = [
    [-1, -1],
    [-1,  0],
    [-1,  1],
    [0,  -1],
    [0,   1],
    [1,  -1],
    [1,   0],
    [1,   1],
  ];

  return deltas.map(([dr, dc]) => {
    const r = row + dr;
    const c = col + dc;
    
    if (r >= 0 && r < rows && c >= 0 && c < cols) {
      return [r, c];
    }
    return null;
  
  }).filter(el => el != null);
}

export const annotate = (input) =>  {
  if (input === undefined || input.length <= 0 || input[0].length <= 0) {
    return input;
  }

  var result = input.slice();
  const rows = result.length;
  const cols = result[0].length;

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      if (mine(result, row, col)) {
        neighbors(result, row, col)
          .filter(([r, c]) => result[r].charAt(c) === ' ')
          .forEach(([r, c]) => {
            const count = neighbors(input, r, c).filter(([r, c]) => mine(input, r, c)).length;
            result[r] = result[r].substring(0, c) + count + result[r].substring(c + 1);
          });
      }
    }
  }

  return result;
}
