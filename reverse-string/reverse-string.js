//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result = `${str[i]}${result}`
  }

  return result;
};
