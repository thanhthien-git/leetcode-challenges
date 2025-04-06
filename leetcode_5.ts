function longestPalindrome(s: string): string {
  let longestString = "";
  let LENGTH = s.length;

  if (LENGTH < 2) return s[0];

  for (let i = 0; i < LENGTH; i++) {
    let left = i,
      right = i;

    while (left >= 0 && right <= LENGTH && s[right] === s[left]) {
      if (right - left + 1 > longestString.length) {
        longestString = s.substring(left, right + 1);
      }
      left--;
      right++;
    }

    (left = i), (right = i + 1);
    while (left >= 0 && right <= LENGTH && s[right] === s[left]) {
      if (right - left + 1 > longestString.length) {
        longestString = s.substring(left, right + 1);
      }
      left--;
      right++;
    }
  }
  return longestString;
}

const TEST_CASE_5: string[] = ["bb", "babad", "cbbd", "a", "ac"];
TEST_CASE_5.forEach((s) => {
  console.log(`value for ${s} w/ len = ${s.length}: `);
  console.log(longestPalindrome(s));
});
