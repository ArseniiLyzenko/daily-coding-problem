let tree = new Node("root",
  new Node("left",
    new Node("left.left")),
  new Node("right")
);

describe("serialize() & deserialize()", function() {
  it("deserialize( serialize(tree) ).left.left.value == left.left", function() {
    assert.equal( deserialize( serialize(tree) ).left.left.value, "left.left");
  });

  it("deserialize( serialize(tree) ) == tree", function() {
    assert.deepEqual( deserialize( serialize(tree) ), tree);
  });
});
