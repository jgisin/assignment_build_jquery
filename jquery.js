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
    this.collection = Array.prototype.slice.call(document.getElementsByClassName(arg.slice(1)));
  }
  else if(arg[0] === "#"){
    this.collection = [document.getElementById(arg.slice(1))];
  }
  else{
    this.collection = Array.prototype.slice.call(document.getElementsByTagName(arg));
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
    return this;
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
    return this;
  };

  this.toggleClass = function(arg){

    var arg_names = arg.split(" ");

    this.each(function(element){
      var class_name = element.className.split(" ");
      var removing = false;

      for ( var i = 0; i < arg_names.length; i++ ){

        var classNameIdx = class_name.indexOf(arg_names[i]);

        if ( classNameIdx > -1 ) {
          class_name.splice(classNameIdx, 1);
          removing = true;
        }
        else{
          element.className += " " + arg_names[i];
        }

      }

      if(removing === true){
        element.className = class_name.join(" ");
      }

    })
    return this;
  }


  this.length = this.collection.length;

  this.idx = function(idx){
    return this.collection[idx];
  }

  return this;

};

var $ = function(arg){
  return new jquery(arg);
};
