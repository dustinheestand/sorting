function bubbleSort(arr) {
  let size = arr.length;

  //while unsorted
  while (size > 1) {
    for (let i = 0; i < size - 1; i++) {
      compare(arr, i);
    }
    size--;
  }
  return arr;
}

function compare(arr, i) {
  if (arr[i] > arr[i + 1]) swap(arr, i);
}

function swap(arr, i) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}
