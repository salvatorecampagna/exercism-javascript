//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
