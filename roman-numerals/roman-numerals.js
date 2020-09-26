const symbols = [
  { symbol: "M" , value: 1000 },
  { symbol: "CM", value: 900  },
  { symbol: "D" , value: 500  },
  { symbol: "CD", value: 400  },
  { symbol: "C" , value: 100  },
  { symbol: "XC", value: 90   },
  { symbol: "L" , value: 50   },
  { symbol: "XL", value: 40   },
  { symbol: "X" , value: 10   },
  { symbol: "IX", value: 9    },
  { symbol: "V" , value: 5    },
  { symbol: "IV", value: 4    },
  { symbol: "I" , value: 1    }
];

export const toRoman = (n) => {
  if (n <= 0) {
    throw Error("Only positive values allowed")
  }

  return symbols.reduce((result, entry) => {
    const q = n / entry.value;
    if (q > 0) {
      n = n % entry.value;
      result = result + entry.symbol.repeat(q);
    }

    return result;
  }, "");
};
