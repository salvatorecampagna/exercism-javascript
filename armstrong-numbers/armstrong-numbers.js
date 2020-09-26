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
