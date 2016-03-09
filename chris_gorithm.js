
// &amp;&amp;&amp;&nbsp;&lt;&nbsp;&gt;&nbsp;&quot;&nbsp;&apos;&nbsp;&comma;
// &&& < > < " ' ,

var decoder = {
  amp: '&amp;',
  space: '&nbsp;',
  less: '&lt;',
  greater: '&gt;',
  quotes: '&quot;',
  apos: '&apos;',
  comma: '&comma;'
}

function switcher(input){
  switch(input){
    case "&":
      decoder.amp
      break;
    case " ":
      decoder.space
  }
}

var encodeHTMLEntities = function(str){
  var test_string = str.split('');
  var return_string = "";
  test_string.forEach(function(el){
    return_string += decoder.call(el);
  })
  return return_string
}

var decodeHTMLEntities = function(str){

}

console.log(encodeHTMLEntities("&&& < > < \" ' ,"))
