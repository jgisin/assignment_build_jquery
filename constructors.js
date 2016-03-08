// Create a normal constructor called FooConstructor which returns a simple FooConstructor instance containing a sample property and method when you call it with the new keyword.
// Create your own "constructor" called BarConstructor which returns a simple anonymous object which is otherwise the same as the one you created using FooConstructor above but doesn't need to be called using new.

function FooConstructor(){
  this.prop = "LOL";
  this.meth = function(){console.log("hi")};
}

function BarConstructor() {
    if(!(this instanceof BarConstructor)){
      return new BarConstructor()
    } else {
      return {
        foo: "bar",
        bar_method: function(){"BAR!"}
      }
    }
    else{
      return{
        foo: "bar",
        bar_method: function(){"BAR!"}
      }
    }
}

var foo = new FooConstructor();
var bar = BarConstructor()
var newbar = new BarConstructor();


console.log(foo);
console.log(bar);
console.log(newbar);
