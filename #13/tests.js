describe("funcName()", function() {
  it("abcba, 2 → bcb", function() {
    assert.equal(funcName("abcba", 2), "bcb");
  });

  it("abcba, 3 → abcba", function() {
    assert.equal(funcName("abcba", 3), "abcba");
  });

  it("xabcbax, 3 → abcba", function() {
    assert.equal(funcName("xabcbax", 3), "abcba");
  });
});
