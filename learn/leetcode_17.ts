function letterCombinations(digits: string): string[] {
  //return [] if digits = 0
  if (!digits) return [];

  let output: string[] = [];

  const PHONE: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  //solution: use backtracking to combine each letter of each Phone digit that match the digits
  //step 1: combination: string -> this param will combine with the letter in current Digits, if nextDigit.length === 0, push the combination
  //step 2: if combination !== null, change to step 3
  //step 3: loop all digits in nextDigit ( which mean current digit ) and push to the output, then call the backtracking which nextDigit is the digits slice the first index
  function backTracking(combination: string, nextDigit: string): void {
    if (nextDigit.length === 0) {
      output.push(combination);
    } else {
      
      for (const letter of PHONE[nextDigit[0]]) {
        backTracking(combination+letter, nextDigit.slice(1));
      }
    }
  }

  backTracking("", digits);

  return output;
}

const TEST_17 = "23";
console.log(letterCombinations(TEST_17));
