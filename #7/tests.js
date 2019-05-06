describe("fibonacci", function() {
  it("10 → 55", function() {
    assert.equal(fibonacci(10), 55);
  });

  it("20 → 6765", function() {
    assert.equal(fibonacci(20), 6765);
  });

  it("30 → 832040", function() {
    assert.equal(fibonacci(30), 832040);
  });

  it("40 → 102334155", function() {
    assert.equal(fibonacci(40), 102334155);
  });
  //
  // it("50 → 12586269025", function() {
  //   assert.equal(fibonacci(50), 12586269025);
  // });
  //
  // it("70 → 190392490709135", function() {
  //   assert.equal(fibonacci(70), 190392490709135);
  // });
});

describe("encrypt", function() {
  it("hi → 89", function() {
    assert.equal(encrypt("hi"), "89");
  });

  it("hello → 85121215", function() {
    assert.equal(encrypt("hello"), "85121215");
  });

  it("message → 1351919175", function() {
    assert.equal(encrypt("message"), "1351919175");
  });

  it("nowaythisisverylongmessagewaytoolong → 141523125208919919225182512151471311919175231252015151215147", function() {
    assert.equal(
      encrypt("nowaythisisverylongmassagewaytoolong"),
      "141523125208919919225182512151471311919175231252015151215147"
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

  it(`aaa → (cipher) ${encrypt("aaa")} → 3`, function() {
    assert.equal(funcName(encrypt("aaa")), 3);
  });

  it(`message → (cipher) ${encrypt("message")} → 16 `, function() {
    assert.equal(funcName(encrypt("message")), 16);
  });

  it('"" → 0', function() {
    assert.equal(funcName(encrypt("")), 0);
  });

  it("nowaythisisverylongmessagewaytoolong → 44236800  ", function() {
    assert.equal(
      funcName(encrypt("nowaythisisverylongmessagewaytoolong")),
      44236800
    );
  });
});
