//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const distance = (x, y) => {
  return Math.sqrt(x * x + y * y);
}

export const score = (x, y) => {
  const d = distance(x, y);
  if (d <= 1.0) {
    return 10;
  } else if (d <= 5.0) {
    return 5;
  } else if (d <= 10.0) {
    return 1;
  }
  return 0.
};
