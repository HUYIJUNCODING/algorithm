//1.冒泡排序
function bubble(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 2. 选择排序
function selectSort(arr) {
  const len = arr.length;
  let indexMin;
  for (let i = 0; i < len - 1; i++) {
    indexMin = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[indexMin]) {
        const temp = arr[indexMin];
        arr[indexMin] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [5, 3, 7, 4, 3, 2, 2, 9];

console.log(bubble(arr))
console.log(selectSort(arr));
