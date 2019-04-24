describe("isThereSubsum", function() {
  it("true, 17, [10, 15, 3, 7]", function() {
    assert.equal(isThereSubsum(17, [10, 15, 3, 7]), true);
  });

  it("false, 17, [10, 15, 3]", function() {
    assert.equal(isThereSubsum(17, [10, 15, 3]), false);
  });

  it("true, 18, [10, 15, 3, 7]", function() {
    assert.equal(isThereSubsum(18, [10, 15, 3, 7]), true);
  });

  it("true, 7, [10, 15, -3, 4]", function() {
    assert.equal(isThereSubsum(7, [10, 15, -3, 4]), true);
  });

  it("false, 10, [5, 15, -3, 4]", function() {
    assert.equal(isThereSubsum(10, [5, 15, -3, 4]), false);
  });

  it("false, 10, [5]", function() {
    assert.equal(isThereSubsum(10, [5]), false);
  });

  it("false, -10, [-5]", function() {
    assert.equal(isThereSubsum(-10, [-5]), false);
  });

  it("true, 10, [5, 5]", function() {
    assert.equal(isThereSubsum(10, [5, 5]), true);
  });

  it("true, -10, [-5, -5]", function() {
    assert.equal(isThereSubsum(-10, [-5, -5]), true);
  });

  it("false, -10, [-5, -6]", function() {
    assert.equal(isThereSubsum(-10, [-5, -6]), false);
  });
});
