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
    x = ~~(x / 10); //~~ 是 Math.floor()的简写方式

    if (res > MAX_INT || res < MIN_INT) {
      return 0;
    }
  }
  return res;
};
// console.log(reverse(-100));

/**
 * 回文数
 *
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 *
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverNum = 0;

  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  while (x > reverNum) {
    const temp = x % 10;
    x = ~~(x / 10);
    reverNum = reverNum * 10 + temp;
  }

  //偶数,奇数情况判断,妙哉!
  return x === reverNum || x === ~~(reverNum / 10);
};

// console.log(isPalindrome(12321))

/**
 * 罗马数字转整数
 *
 * 罗马数字包含以下七种字符: I(1)， V(5)， X(10)， L(50)，C(100)，D( 500) 和 M(1000)。
 *
 *
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let ans = 0;
  for (let i = 0; i < s.length; ) {
    //组合情况有两种,单字符和2位字符,优先判断两位组合情况
    if (s.length > i + 1 && map[s.substr(i, 2)]) {
      ans += map[s.substr(i, 2)];
      i += 2;
    } else {
      ans += map[s.substr(i, 1)];
      i++;
    }
  }
  return ans;
};

// console.log(romanToInt("MCMXCIV"))
