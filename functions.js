function SimpleObject() {
  this.collection = [];
  this.each = function(func){
    for ( var i = 0; i < this.collection.length; i++) {
     func(this.collection[i], i);
    }
  }
}

var myObj = new SimpleObject();
myObj.collection = [1, "foo", 3];
myObj.each( function( el, index ){
    console.log( "Item " + index + " is " + el)
})