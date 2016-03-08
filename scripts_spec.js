var tester = {

  init: function(sprintObj){
    console.log("Initializing test...");
    this.sprintObj = sprintObj;
    this.testLargestEl();
    this.testReversed();
    this.testLoudSnakeCase();
    this.testCompareArrays();
    this.testFizzBuzz();
    this.testMyMap();
    this.testPrimes();
    this.displayResults();
  },


  results: {},


  testLargestEl: function(){
    var input = [2,4,2,1,5,2,5];
    var exp = 5;
    var actual = this.sprintObj.largestEl(input);
    this.results.largestEl = (actual == exp);
  },


  testReversed: function(){
    var input = "I am a special string!";
    var exp = "!gnirts laiceps a ma I";
    var actual = this.sprintObj.reversed(input);
    this.results.reversed = (actual == exp);
  },


  testLoudSnakeCase: function(){
    var input = "I am a strange code.  I like it though!";
    var exp = "I_Am_A_Strange_Code_I_Like_It_Though";
    var actual = this.sprintObj.loudSnakeCase(input);
    this.results.loudSnakeCase = ( actual == exp);
  },


  testCompareArrays: function(){
    var startArr = [1,2,4,3];
    var diffArr = [1,2,3,4];

    // Happy path
    var actual1 = this.sprintObj.compareArrays(startArr, startArr);
    var test1 = ( actual1 == true);

    // Sad path
    var actual2 = this.sprintObj.compareArrays(startArr, diffArr);
    var test2 = ( actual2 == false);

    this.results.compareArrays = ( test1 && test2 );
  },


  testFizzBuzz: function(){
    var input = 16;
    var exp = [1,2,"FIZZ",4,"BUZZ","FIZZ",7,8,"FIZZ","BUZZ",11,"FIZZ",13,14,"FIZZBUZZ",16];
    var actual = this.sprintObj.fizzBuzz(16);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.fizzBuzz = ( this.sprintObj.compareArrays(exp,actual) );
  },


  testMyMap: function(){
    var inputArr = [1,2,3,4,5];
    var inputFunc = function(el){ return el*2; };
    var exp = [2,4,6,8,10];
    var actual = this.sprintObj.myMap(inputArr,inputFunc);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.myMap = ( this.sprintObj.compareArrays(exp, actual) );
  },


  testPrimes: function(){
    var input = 12;
    var exp = [2,3,5,7,11];
    var actual = this.sprintObj.primes(input);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.primes = ( this.sprintObj.compareArrays(exp, actual));
  },


  displayResults: function(){
    console.log("Displaying results...");
    console.log(this.results)
    $("#largest-el").html(String(this.results.largestEl));
    $("#reversed").html(String(this.results.reversed));
    $("#loud-snake-case").html(String(this.results.loudSnakeCase));
    $("#compare-arrays").html(String(this.results.compareArrays));
    $("#fizz-buzz").html(String(this.results.fizzBuzz));
    $("#my-map").html(String(this.results.myMap));
    $("#primes").html(String(this.results.primes));
  }

}


$(document).ready( function(){ tester.init( sprintFunctions )});

