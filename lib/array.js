/**
 * 1.两数之和
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 */

/**
 * 1.1暴力枚举法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;
  let temp = [];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return (temp = [i, j]);
      }
    }
  }
  return temp;
};

/**
 * 1.2 hash映射法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var towSum2 = function (nums, target) {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

// console.log(twoSum([2,7,11,15],9))
// console.log(towSum2([2, 7, 11, 15], 9));

/**
 * 2.最长公共前缀
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  let prefix = strs[0];
  for (let i = 1, ilen = strs.length; i < ilen; i++) {
    let j = 0;
    while (j < prefix.length && j < strs[i].length) {
      if (strs[i][j] !== prefix[j]) {
        break;
      }
      j++;
    }
    prefix = prefix.substring(0, j);
    if (!prefix) return "";
  }
  return prefix;
};
const strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs))

/**
 * 3. 买卖股票的最佳时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let minPrice = prices[0];
  let maxprofit = 0;
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      continue;
    }
    const tempProfit = prices[i] - minPrice;
    if (tempProfit > maxprofit) {
      maxprofit = tempProfit;
    }
  }
  return maxprofit;
};

console.log(maxProfit([1,4,20,2,9]))
