// Build a Roulette game using basic object-oriented programming principles in JavaScript. The user should start with a bankroll and bet with each "spin" of the imaginary wheel. They can choose numbers 1-36. After each spin, the result is displayed and funds are distributed accordingly (payout is 35:1).

// Add the ability for users of your Roulette game to bet on "0" (35:1), "00" (35:1), "Even" (1:1), "Odd" (1:1), "1 to 18" (1:1), "19 to 36" (1:1), "1st 12" (2:1), "2nd 12" (2:1), or "3rd 12" (2:1).

function Roulette( startingBankroll ) {
  this.balance = startingBankroll;

  this.spin = function( bet, input ) {

    if ( bet <= this.balance ) {
      var result = Math.floor( Math.random() * 37 + 1 );

      if ( typeof( input ) === "number" ) {
        var multiplier = this.checkNumber( input, result );
      } else {
        var multiplier = this.checkString( input.toLowerCase(), result );
      }

      if ( result === 37 ) {
        result = "00"
      }

      if ( multiplier !== 0 ) {
        winnings = bet * multiplier;
        this.balance += winnings;
        var message = "You win " + winnings + ", the spin was " + result + "!!!";
      } else {
        this.balance -= bet;
        var message = "You lose! The spin was " + result;
      }

      message += "\nYou now have " + this.balance;
      console.log( message );
    } else {
      console.log( "You can't bet more than you have!" );
    }

    return result;
  };

  this.bankroll = function() {
    console.log( this.balance );
    return this.balance;
  };

  this.buyIn = function( amount ) {
    this.balance += amount;
    return this.balance;
  }

  this.checkNumber = function(input, result) {
    var multiplier = 0;
    if ( input === result ) {
      multiplier = 35;
    }
    return multiplier;
  };

  this.checkString = function(input, result) {
    var multiplier = 0;

    switch(input) {
      case '00':
        if (result === 37) {
          multiplier = 35;
        }
        break;
      case 'even':
        if (result % 2 === 0 && result !== 0 ) {
          multiplier = 1;
        }
        break;
      case 'odd':
        if (result % 1 === 1 && result !== 37) {
          multiplier = 1;
        }
        break;
      case '1 to 18':
        if (result >= 1 && result <= 18) {
          multiplier = 1;
        }
        break;
      case '19 to 36':
        if (result >= 19 && result <= 36) {
          multiplier = 1;
        }
        break;
      case '1st 12':
        if (result >= 1 && result <= 12) {
          multiplier = 2;
        }
        break;
      case '2nd 12':
        if (result >= 13 && result <= 24) {
          multiplier = 2;
        }
        break;
      case '3rd 12':
        if (result >= 25 && result <= 36) {
          multiplier = 2;
        }
        break;
    }
    return multiplier;
  };

}
