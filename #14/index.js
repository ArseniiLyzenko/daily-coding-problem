/*
* The area of a circle is defined as πr^2. Estimate π to 3 decimal places using
* a Monte Carlo method.
*
* Hint: The basic equation of a circle is x^2 + y^2 = r^2.
* */

function funcName() {
  let pi = 0;
  let pointsInCircle = 0;
  let allPoints = 0;
  let x, y;

  while (pi.toFixed(3) != 3.141) {
    allPoints++;

    x = getRandomArbitrary(-1, 1);
    y = getRandomArbitrary(-1, 1);

    if (isBelongToCircle(x, y)) {
      pointsInCircle++;
    }
    pi = pointsInCircle * 4 / allPoints;
  }

  console.log(allPoints); // shows attempts number

  return pi.toFixed(3);

  function isBelongToCircle(x, y, r = 1) {
    return (x)**2 + (y)**2 <= r*r;
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}