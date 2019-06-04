/*
* You run an e-commerce website and want to record the last N order ids in a
* log. Implement a data structure to accomplish this, with the following API:
*
* record(order_id): adds the order_id to the log
*
* get_last(i): gets the ith last element from the log. i is guaranteed to be
* smaller than or equal to N.
*
* You should be as efficient with time and space as possible.
* */

class OrderLog {
  constructor(n) {
    this.n = n;
    this.orderLog = [];
    this.pointer = 0;
  }

  record(order_id) {
    if (this.orderLog.length < this.n) {
      this.orderLog.push(order_id);
    } else {
      this.orderLog[this.pointer] = order_id;

      if (this.pointer < this.n - 1) {
        this.pointer++;
      } else {
        this.pointer = 0;
      }
    }
  }

  get_last(i) {
    if (i >= this.orderLog.length)
      throw new RangeError("The index is beyond the log array");

    i = this.pointer - i - 1;

    if (i < 0)
      i += this.orderLog.length;

    return this.orderLog[i];
  }
}