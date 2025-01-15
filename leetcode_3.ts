function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let map = new Map();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentValue = s[right];

    //if currentValue is existed : move left to the next index: 'abccc' 
    // -> the loop get the string[3].value, map has contains it, left is 0 (left <= current = 3)
    // left = 3+1 = 4
    if (map.has(currentValue) && map.get(currentValue) >= left) {
      left = map.get(currentValue) + 1;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    map.set(currentValue, right);
  }
  return maxLength;
}

const subString: Array<{ test: string; result: number }> = [
  { test: "ckilbkd", result: 5 },
  { test: " ", result: 1 },
  { test: "", result: 0 },
  { test: "abcabcbb", result: 3 },
  { test: "bbbbb", result: 1 },
  { test: "pwwkew", result: 3 },
  { test: "au", result: 2 },
];

subString.forEach((sub) => {
  console.log(lengthOfLongestSubstring(sub.test) === sub.result);
});
