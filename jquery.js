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

  if(arg[0] === "."){
    return this.collection = document.getElementsByClassName(arg.slice(1));
  }
  else if(arg[0] === "#"){
    return this.collection = document.getElementById(arg.slice(1));
  }
  else{
    return this.collection = document.getElementsByTagName(arg);
  };

};
