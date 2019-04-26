/* Given an array of integers, return a new array such that each element
 * at index i of the new array is the product of all the numbers in the original
 * array except the one at i.
 *
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be
 * [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output
 *  would be [2, 3, 6].
 *
 * Follow-up: what if you can't use division?
 * */

function funcName(numbersArr) {
  // Handling [] and [N]
  if (numbersArr.length <= 1) return numbersArr;

  let multFromLeft = multiplyFromLeft(numbersArr);
  let multFromRight = multiplyFromRight(numbersArr);

  let result = [multFromRight[1]];

  for (let i = 1, len = numbersArr.length - 1; i < len; i++) {
    result.push(multFromLeft[i - 1] * multFromRight[i + 1]);
  }

  result.push(multFromLeft[multFromLeft.length - 2]);

  return result;

  function multiplyFromLeft(arr) {
    let result = [arr[0]];
    for (let i = 1, l = arr.length; i < l; i++) {
      result.push(result[i - 1] * arr[i]);
    }
    return result;
  }

  function multiplyFromRight(arr) {
    let len = arr.length - 1;
    let result = [arr[len]];
    for (let i = len; i > 0; i--) {
      result.push(result[len - i] * arr[i - 1]);
    }
    return result.reverse();
  }
}
