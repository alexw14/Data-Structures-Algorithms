/*
  JavaScript has many different search methods on arrays:
    - indexOf
    - includes
    - find
    - findIndex

  They all use Linear Search - sequentially checks each element of the list until a match is found or the whole list has been searched.
*/

// Implement a function call linearSearch that accepts an array and a value
// Return the index at which the value is found
// If the value is never found, return -1
function linearSearch(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1,3,5,7,9,11,13], 11)); // 5
console.log(linearSearch([4,5,7,13,435,64,75,12], 1)) // -1