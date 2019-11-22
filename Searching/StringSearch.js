// Implement a function to count the number of times a smaller string appears in a longer string
function stringSearch(long, short) {
  let counter = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;  // break out of loop if characters don't match
      }
      if (j === short.length - 1) {
        counter++;  // increment counter if we get to the end of short string
      }
    }
  }
  return counter;
}

console.log(stringSearch('hello yellow mellow', 'low'));  // 2
