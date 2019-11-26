// Store the first element as the smallest value
// Compare to next element in the array until a smaller value is found
// If smaller value is found, designate that to be the new smallest value
// Swap the smallest value with the first element
// Repeat with next element until array is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // only swap if i is not min
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([9, 6, 1, 7, 4, 5, 8, 3, 10, 2]));
