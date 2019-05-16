describe("jobScheduler()", function() {
  it("calls the function after the specified timeout", function() {
    let start = Date.now();

    function f(x) {
      assert.equal(Date.now() - start, 1000);
    }
    f = sinon.spy(f);

    jobScheduler(f, 1000);
  });
});
