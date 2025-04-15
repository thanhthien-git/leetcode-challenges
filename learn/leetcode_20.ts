function isValid(s: string): boolean {
  let result: string[] = [];
  for (const c of s) {
    if (c === "(") {
      result.push(")");
    } else if (c === "{") {
      result.push("}");
    } else if (c === "[") {
      result.push("]");
    } else if (result.pop() !== c || !result) {
      return false;
    }
  }
  return result.length === 0;
}

let testcase20 = "([}])";
console.log(isValid(testcase20));
