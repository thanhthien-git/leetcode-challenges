function longestCommonPrefix(strs: string[]): string {
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let currentIndex = 0;
  let longestPrefix: string = "";
  while (currentIndex < first.length && currentIndex < last.length) {
    if (first[currentIndex] === last[currentIndex]) {
      longestPrefix += first[currentIndex];
      currentIndex++;
    } else return longestPrefix;
  }
  return longestPrefix;
}

const TEST_CASE_14 = [
  ["flower", "flow", "flight"],
  ["dog", "racecar", "car"],
];

TEST_CASE_14.forEach((arrStrg) => {
  console.log(`Test case for ${arrStrg}`);
  console.log(console.log(longestCommonPrefix(arrStrg)));
});
