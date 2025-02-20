export function findMax(arr) {
  let max = arr[0];
  for (const i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}

export function reverseArray(arr) {
  return arr.reverse();
}
