var jquery = function(arg){
  if(arg[0] === "."){
    document.getElementsByClassName(arg)
  }
  else if(arg[0] === "#"){
    document.getElementById(arg)
  }
  else{
    document.getElementsByTagName(arg)
  }
}
