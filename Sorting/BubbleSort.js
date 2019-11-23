function bubbleSort(arr) {
  // Loop from end of array towards the beginning
  for (let i = arr.length; i > 0; i--) {
    // Loop from beginning until i - 1
    for (let j = 0; j < i - 1; j++) {
      // Swap value if arr[j] is greater than arr[j+1]
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9, 6, 1, 7, 4, 5, 8, 3, 10, 2]));