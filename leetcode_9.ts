function isPalindrome(x: number): boolean {
  //return false  if x < 0
  if (x < 0) return false;

  let reverse = 0;
  const originX = x

  while (x > 0) {
    //add reminder to current reverse number
    reverse = reverse * 10 + (x % 10);
    //decrease temp number by 10
    x = Math.floor(x / 10);
  }
  return originX === reverse;
}

const TEST_CASE: number[] = [121, -121, 0, 111121111, -92, 11];

TEST_CASE.forEach((value: number, index: number) => {
  console.log("=====");
  console.log(`check is palindrome for ${value} : ${isPalindrome(value)}`);
  console.log("=====");
});
