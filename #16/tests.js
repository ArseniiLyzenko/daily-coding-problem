let orderLog_1 = new OrderLog(5);
let max_1 = 2;

for (let i = 0; i <= max_1; i++) {
  orderLog_1.record(i);
}

describe("orderLog_1 [0, 1, 2]", function() {
  for (let i = 0; i < orderLog_1.orderLog.length; i++) {
    it(`${i} → ${max_1 - i}`, function() {
      assert.equal(orderLog_1.get_last(i), max_1 - i);
    });
  }
});




let orderLog_2 = new OrderLog(5);
let max_2 = 9;

for (let i = 0; i <= max_2; i++) {
  orderLog_2.record(i);
}

describe("orderLog_2 [5, 6, 7, 8, 9]", function() {
  for (let i = 0; i < orderLog_2.orderLog.length; i++) {
    it(`${i} → ${max_2 - i}`, function() {
      assert.equal(orderLog_2.get_last(i), max_2 - i);
    });
  }
});




let orderLog_3 = new OrderLog(5);
let max_3 = 11;

for (let i = 0; i <= max_3; i++) {
  orderLog_3.record(i);
}

describe("orderLog_3 [10, 11, 7, 8, 9]", function() {
  for (let i = 0; i < orderLog_3.orderLog.length; i++) {
    it(`${i} → ${max_3 - i}`, function() {
      assert.equal(orderLog_3.get_last(i), max_3 - i);
    });
  }
});




let orderLog_4 = new OrderLog(5);
let max_4 = 13;

for (let i = 0; i <= max_4; i++) {
  orderLog_4.record(i);
}

describe("orderLog_4 [10, 11, 12, 13, 9]", function() {
  for (let i = 0; i < orderLog_4.orderLog.length; i++) {
    it(`${i} → ${max_4 - i}`, function() {
      assert.equal(orderLog_4.get_last(i), max_4 - i);
    });
  }
});
