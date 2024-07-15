function hasTargetSum(array, target) {
  // Create an empty set to store the numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (const number of array) {
    // Calculate the complement of the current number
    const complement = target - number;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      // If it does, return true
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pairs sum to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  The time complexity of this function is O(n), where n is the number of elements in the array. This is because we are iterating through the array once, and set operations (add and has) are O(1) on average.
*/

/* 
  Add your pseudocode here:
  1. Initialize an empty set to keep track of numbers we've seen so far.
  2. Loop through each number in the array.
  3. For each number, calculate the complement (target - number).
  4. Check if the complement exists in the set:
     - If it does, return true.
     - If it doesn't, add the current number to the set.
  5. If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here:
  The function uses a set to keep track of the numbers we've seen so far as we iterate through the array. For each number, we calculate its complement (the number that would sum with the current number to reach the target). If the complement is already in the set, it means we've found a pair that adds up to the target, so we return true. If the loop completes without finding such a pair, we return false. This approach ensures we only iterate through the array once, achieving a time complexity of O(n).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
