/**
 * 53. 最大子数组和
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxsubArr = (nums) => {
  let pre = 0,
    maxAns = nums[0];
  nums.forEach((n) => {
    console.log(n);
    // 判断是当前的数大还是 之前累加起来的数大，选大的
    pre = Math.max(n, n + pre);
    //
    maxAns = Math.max(maxAns, pre);
    console.log({ pre, maxAns });
  });
  console.log(maxAns);
  return maxAns;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxsubArr(nums);
