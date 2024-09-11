function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target == arr[mid]) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 8, 1, 4, 5, 7, 3], 5));
