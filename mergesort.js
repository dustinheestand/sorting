function split(arr) {
  const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  const secondHalf = arr.slice(Math.floor(arr.length / 2));
  return [firstHalf, secondHalf];
}

function merge([first, second]) {
  const mergedArray = [];
  while (first.length > 0 && second.length > 0) {
    if (first[0] < second[0]) {
      mergedArray.push(first.shift());
    } else {
      mergedArray.push(second.shift());
    }
  }
  return mergedArray.concat(first, second);
}

function mergeSort(arr) {
  if (arr.length == 1) return arr;
  else return merge(mergeSort(split(arr)));
}
