
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

function withOutDivision(numbersArr) {
  // Handling exception with [0]
  if (numbersArr.length === 1 && numbersArr[0] === 0) return [0];

  return numbersArr.map(
    (item, index, arr) =>
      multiplyLeftSide(index, arr) * multiplyRightSide(index, arr)
  );

  function multiplyLeftSide(maxIndex, arr) {
    return arr.reduce(
      (accum, item, i) => (i < maxIndex ? accum * item : accum),
      1
    );
  }

  function multiplyRightSide(minIndex, arr) {
    return arr.reduce(
      (accum, item, i) => (i > minIndex ? accum * item : accum),
      1
    );
  }
}

/* withDivision() function looks ugly,
 * but theoretically it works faster than withOutDivision()
 * */

function withDivision(numbersArr) {
  // Handling Exception with [0]
  if (numbersArr.length === 1 && numbersArr[0] === 0) return [0];

  // Skip algorithm if array has more than one zero
  if (areThereMoreThanOneZero(numbersArr)) {
    return new Array(numbersArr.length).fill(0);
  }

  let totalOfMultip = numbersArr.reduce((accum, current) => accum * current, 1);

  return numbersArr.map(divideTotal);

  function areThereMoreThanOneZero(numbersArr) {
    let zeroCounter = 0;

    for (let item of numbersArr) {
      if (item === 0) {
        zeroCounter++;
        if (zeroCounter === 2) return true;
      }
    }

    return false;
  }

  function divideTotal(num) {
    if (num === 0) {
      let newNum = 1;

      // Handling zero
      for (let item of numbersArr) {
        if (item !== 0) newNum *= item;
      }

      return newNum;
    } else {
      return totalOfMultip / num;
    }
  }
}

/* BRUTEFORCE! */

function bruteForce(numbersArr) {
  // Handling Exception with [0]
  if (numbersArr.length === 1 && numbersArr[0] === 0) return [0];

  return numbersArr.map((num, i, arr) => {
    let newNum = 1;

    for (let j = 0, l = arr.length; j < l; j++) {
      if (j !== i) newNum *= arr[j];
    }

    return newNum;
  });
}
