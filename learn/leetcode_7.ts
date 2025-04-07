function reverse(x: number): number {
  const INT32_MAX = 2147483647;
  const INT32_MIN = -2147483648;

  let reverseNum = 0;
  let temp = x > 0 ? 1 : -1;
  x = Math.abs(x);
  if (x > INT32_MAX || x < INT32_MIN) return 0;
  while (x !== 0) {
    let digit = x % 10;
    let newResult = reverseNum * 10 + digit;
    if (newResult > INT32_MAX || newResult < INT32_MIN) {
      return 0;
    }
    reverseNum = newResult;
    x = Math.floor(x / 10);
  }
  return reverseNum * temp;
}

console.log(reverse(1534236469));
