const SYMBOLS: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let res = 0;
  const LENGTH = s.length;
  let currentIndex = 0;
  while (currentIndex < LENGTH) {
    if (
      currentIndex < LENGTH - 1 &&
      SYMBOLS[s[currentIndex]] < SYMBOLS[s[currentIndex + 1]]
    ) {
      res += SYMBOLS[s[currentIndex + 1]] - SYMBOLS[s[currentIndex]];
      currentIndex += 2;
    } else {
      res += SYMBOLS[s[currentIndex]];
      currentIndex += 1;
    }
  }
  return res;
}

console.log(romanToInt("MCMXCIV"));
