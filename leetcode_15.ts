//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
*/

function threeSum(nums: number[]): number[][] {
  let threeSumResult: number[][] = [];
  nums.sort((a, b) => a - b);  let MAX_LENGTH = nums.length;

  for (let i = 0; i < MAX_LENGTH - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let right = MAX_LENGTH - 1;
    let left = i + 1;

    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        threeSumResult.push([nums[i], nums[left], nums[right]]);
        //skip to next value if duplicate
        while (left < right && nums[left] === nums[left+1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return threeSumResult;
}

const test_15 = [2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]


console.log(threeSum(test_15));
