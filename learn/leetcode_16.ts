/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let LENGTH = nums.length;
  let min = nums[0] + nums[1] + nums[2];

  let minDis = Math.abs(target - min);
  for (let i = 0; i < LENGTH - 2; i++) {
    let left = i + 1;
    let right = LENGTH - 1;
    while (left < right) {
      let crSum = nums[i] + nums[left] + nums[right];
      let currentDis = Math.abs(target - crSum)
      if (currentDis < minDis) {
        min = crSum;
        minDis = currentDis;
      }
      if (crSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return min;
}

const test_16 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(threeSumClosest(test_16, 1));
