describe("encrypt", function() {
  it("hi → 89", function() {
    assert.equal(encrypt("hi"), "89");
  });

  it("hello → 85121215", function() {
    assert.equal(encrypt("hello"), "85121215");
  });

  it("qweasdzxc → 17235119426243", function() {
    assert.equal(encrypt("qweasdzxc"), "17235119426243");
  });

  it("ghbdtnqertfdqwqasdzxcxcvcvbfghrtyvbnerazzzj → 7824201417518206417231711942624324322322267818202522214518126262610", function() {
    assert.equal(
      encrypt("ghbdtnqertfdqwqasdzxcxcvcvbfghrtyvbnerazzzj"),
      "7824201417518206417231711942624324322322267818202522214518126262610"
    );
  });
});

describe("funcName", function() {
  it('"112811201121" → 30', function() {
    assert.equal(funcName("112811201121"), 30);
  });

  it('"112011" → 4', function() {
    assert.equal(funcName("112011"), 4);
  });

  it('"1120111" → 6', function() {
    assert.equal(funcName("1120111"), 6);
  });

  it('"123215231225375123127" → 540', function() {
    assert.equal(funcName("123215231225375123127"), 540);
  });

  it('"12372156723127471025375123127" → 432', function() {
    assert.equal(funcName("12372156723127471025375123127"), 432);
  });

  it(`aaa → ${encrypt("aaa")} → 3`, function() {
    assert.equal(funcName(encrypt("aaa")), 3);
  });

  it(`qweasdzxc → ${encrypt("qweasdzxc")} → 48`, function() {
    assert.equal(funcName(encrypt("qweasdzxc")), 48);
  });

  it('"" → 0', function() {
    assert.equal(funcName(encrypt("")), 0);
  });

  it("ghbdtnqertfdqwqasdzxcxcvcvbfghrtyvbnerazzzj → 35389440 ", function() {
    assert.equal(
      funcName(encrypt("ghbdtnqertfdqwqasdzxcxcvcvbfghrtyvbnerazzzj")),
      35389440
    );
  });
});
