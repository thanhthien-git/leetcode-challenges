function twoSum(nums: number[], target: number): number[] {
  let hashMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    if (hashMap.has(remaining)) {
      return [hashMap.get(remaining)!, i];
    }
    hashMap.set(nums[i], i);
  }
  return [];
}

//step 1: find the num[2] base on target - arr[1]
//step 2: map the arr find the value

const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target));
