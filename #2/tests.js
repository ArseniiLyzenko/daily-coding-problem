describe("funcName()", function() {
  it("[1, 2, 3, 4, 5] → [120, 60, 40, 30, 24]", function() {
    assert.deepEqual(funcName([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
  });

  it("[3, 2, 1] → [2, 3, 6]", function() {
    assert.deepEqual(funcName([3, 2, 1]), [2, 3, 6]);
  });

  it("[1] → [1]", function() {
    assert.deepEqual(funcName([1]), [1]);
  });

  it("[] → []", function() {
    assert.deepEqual(funcName([]), []);
  });

  it("[1, 1] → [1, 1]", function() {
    assert.deepEqual(funcName([1, 1]), [1, 1]);
  });

  it("[2, 2] → [2, 2]", function() {
    assert.deepEqual(funcName([2, 2]), [2, 2]);
  });

  it("[2, 2, 2] → [4, 4, 4]", function() {
    assert.deepEqual(funcName([2, 2, 2]), [4, 4, 4]);
  });

  it("[2, 0, 2] → [0, 4, 0]", function() {
    assert.deepEqual(funcName([2, 0, 2]), [0, 4, 0]);
  });

  it("[0, 2, 3, 0, 5] → [0, 0, 0, 0, 0]", function() {
    assert.deepEqual(funcName([0, 2, 3, 0, 5]), [0, 0, 0, 0, 0]);
  });

  it("[0, 0, 0] → [0, 0, 0]", function() {
    assert.deepEqual(funcName([0, 0, 0]), [0, 0, 0]);
  });

  it("[0] → [0]", function() {
    assert.deepEqual(funcName([0]), [0]);
  });

  it("[-1, 2, 3, 4, 5] → [120, -60, -40, -30, -24]", function() {
    assert.deepEqual(funcName([-1, 2, 3, 4, 5]), [120, -60, -40, -30, -24]);
  });

  it("[1, -2, 3, -4, 5] → [120, -60, 40, -30, 24]", function() {
    assert.deepEqual(funcName([1, -2, 3, -4, 5]), [120, -60, 40, -30, 24]);
  });

  // Nope)))
  // it("[1, -2, 0, -4, 5] → [0, 0, 40, 0, 0]", function() {
  //   assert.deepEqual(funcName([1, -2, 0, -4, 5]), [0, 0, 40, 0, 0]);
  // });
});