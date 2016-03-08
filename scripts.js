// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function( array ){
    var largest = array[0];
    for ( var i = 1; i < array.length; i++ ) {
      if ( array[i] > largest ) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function( string ){
    reversed_string = "";
    for ( var i = string.length - 1; i >= 0; i-- ) {
      reversed_string += string[i];
    }
    return reversed_string
  },

  loudSnakeCase: function( string ){
    console.log(string);
    loudSnakeString = "";
    wordArr = string.split(/ +/);

    for ( var i = 0; i < wordArr.length; i++ ) {
      wordArr[i] = wordArr[i].split(/\W/).join("");
      wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
    }
    console.log(wordArr.join("_"));
    return loudSnakeString = wordArr.join("_");
  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    if ( array1.length != array2.length ) {
      return false;
    } else {
      for ( var i = 0; i < array1.length; i++ ) {

        if ( array1[i] != array2[i] ) {
          return false;
        }
      }
      return true;
    }
  },

  fizzBuzz: function(number){
    // your code here
    var fizzbuzz = [];

    for ( var i = 1; i <= number; i++ ) {
      if ( i % 3 === 0 && i % 5 === 0 ) {
        fizzbuzz.push("FIZZBUZZ");
      } else if ( i % 3 === 0 ) {
        fizzbuzz.push("FIZZ");
      } else if ( i % 5 === 0 ) {
        fizzbuzz.push("BUZZ");
      } else {
        fizzbuzz.push(i);
      }
    }
    return fizzbuzz;
  },

  myMap: function(array, func){
    // your code here
    var returned_array = []

    for ( var i = 0; i < array.length; i++ ) {
      returned_array.push(func(array[i]));
    }
    return returned_array;
  },

  primes: function(number){
    // your code here
    var primes_array = [];
    for ( var i = 2; i <= number; i++ ) {

      for ( var j = 2; j <= i; j++ ) {
        if ( i % j === 0 && i !== j ) {
          break;
        } else if ( j === i ) {
          primes_array.push(i);
        }
      }
    }
    return primes_array;
  },
}
