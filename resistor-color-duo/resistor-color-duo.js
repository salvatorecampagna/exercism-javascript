const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const decodedValue = (colors) => {
  return colors.slice(0, 2).reduce((total, value) => {
    return total * 10 + COLORS.indexOf(value);
  }, 0);
};
