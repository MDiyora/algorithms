function selectionSort(arr) {
  let curr_min;
  let curr_num;

  for (let i = 0; i < arr.length; i++) {
    curr_min = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      curr_num = arr[j];
      if (curr_min > curr_num) {
        arr[i] = curr_num;
        arr[j] = curr_min;
        curr_min = curr_num;
      }
    }
  }
  return arr;
}

console.log(selectionSort([2, 8, 1, 4, 5, 7, 3]));
