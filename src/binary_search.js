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

// console.log(binarySearch([2, 8, 1, 4, 5, 7, 3], 5));

function binarySearchRecursive(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
  return binarySearchRecursive(arr, target, left, mid - 1);
}

// console.log(binarySearchRecursive([2, 8, 1, 4, 5, 7, 3], 5, 0, 7 - 1));
