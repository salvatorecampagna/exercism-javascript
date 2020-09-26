function encodeChar(c, n) {
  if (n > 1) {
    return `${n}${c}`;
  } 
  return `${c}`;
}

export const encode = (str) => {
  if (str === undefined) {
    return "";
  }

  var result = "";
  var count = 1;
  
  for (var i = 1; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i-1)) {
      count++
    } else {
      result = result + encodeChar(str.charAt(i - 1), count);
      count = 1;
    }
  }

  return result + encodeChar(str.charAt(i - 1), count);
};

function isDigit(c) {
  return (c >= '0' && c <= '9');
}

function decodeChar(c, n) {
  var str = "";

  if (n === 0) {
    return c;
  }

  for (var i = 0; i < n; i++) {
    str = `${str}${c}`;
  }

  return str;
}

export const decode = (str) => {
  var value = 0;
  var result = "";

  for (var i = 0; i < str.length; i++) {
    if (isDigit(str.charAt(i))) {
      value = value * 10 + parseInt(str.charAt(i));
    } else {
      result = result + decodeChar(str.charAt(i), value);
      value = 0;
    }
  }

  return result;
};