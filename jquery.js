var jquery = function(arg){
  if(arg[0] === "."){
    return document.getElementsByClassName(arg.slice(1));
  }
  else if(arg[0] === "#"){
    return document.getElementById(arg.slice(1));
  }
  else{
    return document.getElementsByTagName(arg);
  };
}
