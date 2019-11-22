/*
  - Binary search is much faster form of search
  - Eliminate half of the remaining elements at a time rather than one element at a time
  - Binary search only works on sorted array
*/

// Implement a function call binarySearch that accepts an array and a value
// Return the index at which the value is found
// If the value is never found, return -1

// Create a left pointer and a right pointer
// While left pointer is less than right pointer
// Create a midpoint
// If midpoint = value, return index
// If value is smaller than midpoint, set right pointer to midpoint
// If value is greater than midpoint, set left pointer to midpoint

function binarySearch(array, val) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === val) {
      return middle;
    }
    if (array[middle] < val) {
      left = middle + 1;
    }
    if (array[middle] > val) {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15)) // 14
