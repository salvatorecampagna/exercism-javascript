export const reverseString = (str) => {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result = `${str[i]}${result}`
  }

  return result;
};
