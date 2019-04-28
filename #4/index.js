/* Given an array of integers, find the first missing positive integer in
 * linear time and constant space. In other words, find the lowest positive
 * integer that does not exist in the array. The array can contain duplicates
 * and negative numbers as well.
 *
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0]
 * should give 3.
 *
 * You can modify the input array in-place.
 **/

function funcName(numbersArr) {
  let sorted = numbersArr.sort((a, b) => a - b);

  let len = numbersArr.length;

  for (let i = 0; i < len; i++) {
    if (sorted[i] + 1 > 0 && sorted[i] + 1 < sorted[i + 1]) {
      return sorted[i] + 1;
    }
  }

  return sorted[len - 1] + 1;
}
