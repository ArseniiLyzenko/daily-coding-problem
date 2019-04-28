describe("Description", function() {
  it("[3, 4, -1, 1] → 2", function() {
    assert.equal(funcName([3, 4, -1, 1]), 2);
  });

  it("[3, 4, -1, 1, -3] → 2", function() {
    assert.equal(funcName([3, 4, -1, 1, -3]), 2);
  });

  it("[1, 2, 0] → 3", function() {
    assert.equal(funcName([1, 2, 0]), 3);
  });
});
