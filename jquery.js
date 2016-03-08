// var jquery = function(arg){
//   if(arg[0] === "."){
//     return document.getElementsByClassName(arg.slice(1));
//   }
//   else if(arg[0] === "#"){
//     return document.getElementById(arg.slice(1));
//   }
//   else{
//     return document.getElementsByTagName(arg);
//   };
// }

function jquery(arg) {

  if (!(this instanceof jquery)) {
    return new jquery(arg);
  }

  if ( typeof arg === "object" ) {
    this.collection = arg;
  }
  else if(arg[0] === "."){
    this.collection = document.getElementsByClassName(arg.slice(1));
  }
  else if(arg[0] === "#"){
    this.collection = [document.getElementById(arg.slice(1))];
  }
  else{
    this.collection = document.getElementsByTagName(arg);
  };

  this.each = function(func){
    for ( var i = 0; i < this.collection.length; i++) {
     func(this.collection[i], i);
    }
  };

  this.hasClass = function(arg){
    return this.each(function(element){
      var boo = false
      if ( element.className === arg ) {
        boo = true
      }
      return boo
    })

  };



  this.length = this.collection.length;
  this.idx = function(idx){
    return this.collection[idx];
  }
  return this
};

var $ = function(arg){
  return new jquery(arg);
};
