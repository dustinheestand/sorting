function split(arr) {
  if (arr.length < 2) return arr;
  const firstHalf = arr.slice(0, Math.ceil(arr.length / 2));
  const secondHalf = arr.slice(Math.ceil(arr.length / 2));
  return [split(firstHalf), split(secondHalf)];
}

function merge([array1, array2 = []]) {
  if (Array.isArray(array1[0])) {
    return merge([merge(array1), merge(array2)]);
  } else {
    const mergedArray = [];
    while (array1.length > 0 && array2.length > 0) {
      if (array1[0] < array2[0]) {
        mergedArray.push(array1.shift());
      } else {
        mergedArray.push(array2.shift());
      }
    }
    return mergedArray.concat(array1, array2);
  }
}

function mergeSort(arr) {
  return merge(split(arr));
}
