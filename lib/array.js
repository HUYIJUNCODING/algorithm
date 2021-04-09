/**
 * 1.两数之和
 * 
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 */ 

/**
 * 1.暴力枚举法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const len = nums.length;
    let temp = [];
    for(let i = 0;i<len;i++) {
        for(let j = i + 1;j<len;j++) {
            if(nums[i] + nums[j] === target) {
                return temp = [i,j];
            }
        }
    }
    return temp;
};


/**
 * 2.hash映射法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var towSum2 = function(nums,target) {
    const len = nums.length;
    const map = new Map();
    for(let i = 0;i<len;i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target-nums[i]),i]
        }else {
            map.set(nums[i],i)
        }
    }
    return []
}


// console.log(twoSum([2,7,11,15],9))
console.log(towSum2([2,7,11,15],9))



