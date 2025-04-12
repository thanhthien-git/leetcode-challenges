function fourSum(nums: number[], target: number): number[][] {
  let result: number[][] = [];
  let LENGTH = nums.length;
  if (LENGTH < 4) return [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < LENGTH - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < LENGTH - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let leftNode = j + 1;
      let rightNode = LENGTH - 1;
      while (leftNode < rightNode) {
        const currentSum = nums[i] + nums[j] + nums[leftNode] + nums[rightNode];

        if (currentSum === target) {
          result.push([nums[i], nums[j], nums[leftNode], nums[rightNode]]);
          while (leftNode < rightNode && nums[leftNode] === nums[leftNode + 1])
            leftNode++;
          while (
            leftNode < rightNode &&
            nums[rightNode] === nums[rightNode - 1]
          )
            rightNode--;
          leftNode++;
          rightNode--;
        } else if (currentSum < target) {
          leftNode++;
        } else {
          rightNode--;
        }
      }
    }
  }
  return result;
}

const testcase_18 = [2,2,2,2];

console.log(fourSum(testcase_18, 8));
