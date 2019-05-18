describe("funcName()", function() {
  it("\"de\", [dog, deer, deal] → [deer, deal]", function() {
    assert.deepEqual(funcName("de", ["dog", "deer", "deal"]), ["deer", "deal"]);
  });

  it("\"de\", [dog, deer, deal, dde] → [deer, deal]", function() {
    assert.deepEqual(funcName("de", ["dog", "deer", "deal", "dde"]), ["deer", "deal"]);
  });
});
