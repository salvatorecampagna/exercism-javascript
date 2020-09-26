//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numberStr = number.toString()
  const len = numberStr.length;

  var value = 0;
  for (var i = 0; i < len; i++) {
    const digit = numberStr.charCodeAt(i) - "0".charCodeAt(0);
    value = value + Math.pow(digit, len);
  }

  return value === number;
};
