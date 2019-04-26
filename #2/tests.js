describe("withOutDivision()", function() {
  it("[1, 2, 3, 4, 5] → [120, 60, 40, 30, 24]", function() {
    assert.deepEqual(withOutDivision([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
  });

  it("[3, 2, 1] → [2, 3, 6]", function() {
    assert.deepEqual(withOutDivision([3, 2, 1]), [2, 3, 6]);
  });

  it("[1] → [1]", function() {
    assert.deepEqual(withOutDivision([1]), [1]);
  });

  it("[] → []", function() {
    assert.deepEqual(withOutDivision([]), []);
  });

  it("[1, 1] → [1, 1]", function() {
    assert.deepEqual(withOutDivision([1, 1]), [1, 1]);
  });

  it("[2, 2] → [2, 2]", function() {
    assert.deepEqual(withOutDivision([2, 2]), [2, 2]);
  });

  it("[2, 2, 2] → [4, 4, 4]", function() {
    assert.deepEqual(withOutDivision([2, 2, 2]), [4, 4, 4]);
  });

  it("[2, 0, 2] → [0, 4, 0]", function() {
    assert.deepEqual(withOutDivision([2, 0, 2]), [0, 4, 0]);
  });

  it("[0, 2, 3, 0, 5] → [0, 0, 0, 0, 0]", function() {
    assert.deepEqual(withOutDivision([0, 2, 3, 0, 5]), [0, 0, 0, 0, 0]);
  });

  it("[0, 0, 0] → [0, 0, 0]", function() {
    assert.deepEqual(withOutDivision([0, 0, 0]), [0, 0, 0]);
  });

  it("[0] → [0]", function() {
    assert.deepEqual(withOutDivision([0]), [0]);
  });

  it("[-1, 2, 3, 4, 5] → [120, -60, -40, -30, -24]", function() {
    assert.deepEqual(withOutDivision([-1, 2, 3, 4, 5]), [120, -60, -40, -30, -24]);
  });

  it("[1, -2, 3, -4, 5] → [120, -60, 40, -30, 24]", function() {
    assert.deepEqual(withOutDivision([1, -2, 3, -4, 5]), [120, -60, 40, -30, 24]);
  });

  // Nope)))
  // it("[1, -2, 0, -4, 5] → [0, 0, 40, 0, 0]", function() {
  //   assert.deepEqual(withOutDivision([1, -2, 0, -4, 5]), [0, 0, 40, 0, 0]);
  // });
});

describe("withDivision()", function() {
  it("[1, 2, 3, 4, 5] → [120, 60, 40, 30, 24]", function() {
    assert.deepEqual(withDivision([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
  });

  it("[3, 2, 1] → [2, 3, 6]", function() {
    assert.deepEqual(withDivision([3, 2, 1]), [2, 3, 6]);
  });

  it("[1] → [1]", function() {
    assert.deepEqual(withDivision([1]), [1]);
  });

  it("[] → []", function() {
    assert.deepEqual(withDivision([]), []);
  });

  it("[1, 1] → [1, 1]", function() {
    assert.deepEqual(withDivision([1, 1]), [1, 1]);
  });

  it("[2, 2] → [2, 2]", function() {
    assert.deepEqual(withDivision([2, 2]), [2, 2]);
  });

  it("[2, 2, 2] → [4, 4, 4]", function() {
    assert.deepEqual(withDivision([2, 2, 2]), [4, 4, 4]);
  });

  it("[2, 0, 2] → [0, 4, 0]", function() {
    assert.deepEqual(withDivision([2, 0, 2]), [0, 4, 0]);
  });

  it("[0, 2, 3, 0, 5] → [0, 0, 0, 0, 0]", function() {
    assert.deepEqual(withDivision([0, 2, 3, 0, 5]), [0, 0, 0, 0, 0]);
  });

  it("[0, 0, 0] → [0, 0, 0]", function() {
    assert.deepEqual(withDivision([0, 0, 0]), [0, 0, 0]);
  });

  it("[0] → [0]", function() {
    assert.deepEqual(withDivision([0]), [0]);
  });

  it("[-1, 2, 3, 4, 5] → [120, -60, -40, -30, -24]", function() {
    assert.deepEqual(withDivision([-1, 2, 3, 4, 5]), [120, -60, -40, -30, -24]);
  });

  it("[1, -2, 3, -4, 5] → [120, -60, 40, -30, 24]", function() {
    assert.deepEqual(withDivision([1, -2, 3, -4, 5]), [120, -60, 40, -30, 24]);
  });
});

describe("bruteForce()", function() {
  it("[1, 2, 3, 4, 5] → [120, 60, 40, 30, 24]", function() {
    assert.deepEqual(bruteForce([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
  });

  it("[3, 2, 1] → [2, 3, 6]", function() {
    assert.deepEqual(bruteForce([3, 2, 1]), [2, 3, 6]);
  });

  it("[1] → [1]", function() {
    assert.deepEqual(bruteForce([1]), [1]);
  });

  it("[] → []", function() {
    assert.deepEqual(bruteForce([]), []);
  });

  it("[1, 1] → [1, 1]", function() {
    assert.deepEqual(bruteForce([1, 1]), [1, 1]);
  });

  it("[2, 2] → [2, 2]", function() {
    assert.deepEqual(bruteForce([2, 2]), [2, 2]);
  });

  it("[2, 2, 2] → [4, 4, 4]", function() {
    assert.deepEqual(bruteForce([2, 2, 2]), [4, 4, 4]);
  });

  it("[2, 0, 2] → [0, 4, 0]", function() {
    assert.deepEqual(bruteForce([2, 0, 2]), [0, 4, 0]);
  });

  it("[0, 2, 3, 0, 5] → [0, 0, 0, 0, 0]", function() {
    assert.deepEqual(bruteForce([0, 2, 3, 0, 5]), [0, 0, 0, 0, 0]);
  });

  it("[0, 0, 0] → [0, 0, 0]", function() {
    assert.deepEqual(bruteForce([0, 0, 0]), [0, 0, 0]);
  });

  it("[0] → [0]", function() {
    assert.deepEqual(bruteForce([0]), [0]);
  });

  it("[-1, 2, 3, 4, 5] → [120, -60, -40, -30, -24]", function() {
    assert.deepEqual(bruteForce([-1, 2, 3, 4, 5]), [120, -60, -40, -30, -24]);
  });

  it("[1, -2, 3, -4, 5] → [120, -60, 40, -30, 24]", function() {
    assert.deepEqual(bruteForce([1, -2, 3, -4, 5]), [120, -60, 40, -30, 24]);
  });
});
