describe("Description", function() {
  it("car(cons(3,4)) → 3", function() {
    assert.equal(car(cons(3,4)), 3);
  });

  it("cdr(cons(3,4)) → 4", function() {
    assert.equal(cdr(cons(3,4)), 4);
  });
});
