var rouletteTester = {

  init: function() {
    console.log("Initializing test...");
    console.log("Testing Spin, " + this.testSpin());
    console.log("Testing CheckNumber, " + this.testCheckNumberWin());
    console.log("Testing CheckNumberLose, " + this.testCheckNumberLose());
    console.log("Testing CheckString, " + this.testStringWin());
    console.log("Testing CheckStringLose, " + this.testStringLose());
    console.log("Testing Bankroll, " + this.testBankroll());
    console.log("Testing Buyin, " + this.testBuyin());
  },

  testSpin: function() {
    roulObj = new Roulette(100);
    result = roulObj.spin(10, 5);
    return result >= 0 && result <= 37;
  },

  testCheckNumberWin: function() {
    roulObj = new Roulette(100);
    var input = 4;
    var result = 4;
    var exp = 35;
    var actual = roulObj.checkNumber(input, result);
    return actual === exp;
  },

  testCheckNumberLose: function() {
    roulObj = new Roulette(100);
    var input = 4;
    var result = 5;
    var exp = 0;
    var actual = roulObj.checkNumber(input, result);
    return actual === exp;
  },

  testStringWin: function() {
    roulObj = new Roulette(100);
    var input = 'even';
    var result = 6;
    var exp = 1;
    var actual = roulObj.checkString(input, result);
    return actual === exp;
  },

  testStringLose: function() {
    roulObj = new Roulette(100);
    var input = 'even';
    var result = 5;
    var exp = 0;
    var actual = roulObj.checkString(input, result);
    return actual === exp;
  },

  testBankroll: function() {
    roulObj = new Roulette(100);
    return roulObj.bankroll() === 100;
  },

  testBuyin: function() {
    var input = 1000; 
    var exp = roulObj.bankroll() + input;
    roulObj.buyIn(input);
    var actual = roulObj.bankroll();
    return actual === exp;
  }

}
rouletteTester.init();
