describe("isUnivalTree()", function() {
  it('isUnivalTree1 → true', function () {
    assert.equal(isUnivalTree(isUnivalTree1), true);
  });

  it('isUnivalTree2 → true', function () {
    assert.equal(isUnivalTree(isUnivalTree2), true);
  });

  it('isUnivalTree3 → true', function () {
    assert.equal(isUnivalTree(isUnivalTree3), true);
  });

  it('isUnivalTree4 → false', function () {
    assert.equal(isUnivalTree(isUnivalTree4), false);
  });

  it('isUnivalTree5 → true', function () {
    assert.equal(isUnivalTree(isUnivalTree5), true);
  });
});

describe("Description", function() {
  it("tree1 → 5", function() {
    assert.equal(countUnivalSubTrees(tree1), 5);
  });

  it("tree2 → 7", function() {
    assert.equal(countUnivalSubTrees(tree2), 7);
  });

  it("tree3 → 6", function() {
    assert.equal(countUnivalSubTrees(tree3), 6);
  });

  it("tree4 → 8", function() {
    assert.equal(countUnivalSubTrees(tree4), 8);
  });

  it("tree5 → 9", function() {
    assert.equal(countUnivalSubTrees(tree5), 9);
  });

  it("tree6 → 7", function() {
    assert.equal(countUnivalSubTrees(tree6), 7);
  });

  it("tree7 → 8", function() {
    assert.equal(countUnivalSubTrees(tree7), 8);
  });
});
