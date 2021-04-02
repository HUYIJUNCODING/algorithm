/**
 * 整数翻转
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2**31,  2**31 − 1] ，就返回 0。
 *
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);
  let res = 0;

  while (x != 0) {
    const temp = x % 10;
    res = res * 10 + temp;
    x = ~~(x / 10);

    if (res > MAX_INT || res < MIN_INT) {
      return 0;
    }
  }
  return res;
};
console.log(reverse(-100));
