/**
 * 217. 存在重复元素
 *
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  // let sortedArr = nums.sort((a, b) => a - b);//直接排序：sort改变数组本身
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    console.log(nums);
    // err:{ i: 2, j: 14 }
    // if...else...非a即b，重复项在后面时 提前返回了
    // if (sortedArr[i] === sortedArr[i + 1]) {
    //   console.log({ i: sortedArr[i], j: sortedArr[i + 1] });
    //   console.log("true");
    //   return true;
    // } else {
    //   console.log({ i: sortedArr[i], j: sortedArr[i + 1] });
    //   console.log("false");
    //   return false;
    // }

    if (nums[i] === nums[i + 1]) {
      console.log(nums[i]);
      console.log("true");
      return true;
    }
  }
  console.log("false");
  return false;
};

const nums1 = [2, 14, 18, 22, 22];
const nums2 = [1, 2, 3, 1];
containsDuplicate(nums2);
