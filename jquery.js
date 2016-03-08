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

  // if (!(this instanceof jquery)) {
  //   return new jquery(arg);
  // }

  

  if ( typeof arg === "object" ) {
    this.collection = [arg];
  }
  else if(arg[0] === "."){
    this.collection = document.getElementsByClassName(arg.slice(1));
  }
  else if(arg[0] === "#"){
    this.collection = [document.getElementById(arg.slice(1))];
  }
  else{
    this.collection = document.getElementsByTagName(arg);
  }

  this.each = function(funk){
    for ( var i = 0; i < this.collection.length; i++) {
     funk(this.collection[i], i);
    }
  };

  this.hasClass = function(arg){
    var bool = false

    this.each(function(element){
      if ( element.className === arg ) {
        bool = true;
      }
    });

    return bool
  };

  this.addClass = function(arg){
    this.each(function(element){
      element.className += " " + arg;
    });
  };

  this.removeClass = function(arg){

    var arg_names = arg.split(" ");

    this.each(function(element){
      var class_name = element.className.split(" ");

      for ( var i = 0; i < arg_names.length; i++ ){

        var classNameIdx = class_name.indexOf(arg_names[i]);

        if ( classNameIdx > -1 ) {
          class_name.splice(classNameIdx, 1);
        }

      }

      element.className = class_name.join(" ");

    });
  };

  this.length = this.collection.length;

  this.idx = function(idx){
    return this.collection[idx];
  }

  return this;

};

var $ = function(arg){
  return new jquery(arg);
};
