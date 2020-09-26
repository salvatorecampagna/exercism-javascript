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
  var value = 0
  for (let i = 0; i < 2; i++) {
    value = value * 10 + COLORS.indexOf(colors[i]);
  }

  return value;
};
