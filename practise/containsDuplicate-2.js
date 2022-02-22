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
  // 创建hash表
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      console.log("true");
      return true;
    }
    set.add(n);
  }
  console.log("false");
  return false;
};

const nums = [2, 14, 18, 22, 22];
containsDuplicate(nums);

// or just use Set
return new Set(nums).size !== nums.lemgth;
