describe("funcName()", function() {
  it("0 → 0", function() {
    assert.equal(funcName(0), 0);
  });

  it("1 → 1", function() {
    assert.equal(funcName(1), 1);
  });

  it("2 → 2", function() {
    assert.equal(funcName(2), 2);
  });

  it("3 → 3", function() {
    assert.equal(funcName(3), 3);
  });

  it("4 → 5", function() {
    assert.equal(funcName(4), 5);
  });

  it("5 → 8", function() {
    assert.equal(funcName(5), 8);
  });

  it("6 → 13", function() {
    assert.equal(funcName(6), 13);
  });
});
