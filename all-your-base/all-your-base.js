const toBase10 = (value, base) => {
  var result = 0;
  
  for (var i = 0; i < value.length; i++) {
    if (value[i] < 0 || value[i] >= base) {
      throw Error('Input has wrong format');
    }
    result = result * base + parseInt(value[i]);
  }
  
  return result;
}

const fromBase10 = (value, base) => {
  const result = [];
  
  while (value > 0) {
    const rem = value % base;
    value = Math.floor(value / base);
    result.push(rem);
  }
  
  if (result.length <=0 ) {
    result.push(0);
  }
  
  return result.reverse();
}

export const convert = (value, base1, base2) => {
  if (base1 === undefined || base1 <= 1 || !Number.isInteger(base1)) {
    throw Error('Wrong input base');
  }

  if (base2 === undefined || base2 <= 1 || !Number.isInteger(base2)) {
    throw Error('Wrong output base');
  }

  if (value === undefined || value.length <= 0) {
    throw Error('Input has wrong format');
  }

  if (value !== undefined && value.length > 1 && value[0] === 0) {
    throw Error('Input has wrong format');
  }

  return fromBase10(toBase10(value, base1), base2);
};
