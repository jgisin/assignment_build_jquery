function bubbleSort( array ) {
  var swaps;
  while ( swaps !== 0 ) {
    swaps = 0;
    for ( var i = 0; i < array.length - 1; i++ ) {
      if ( array[i] > array[i+1] ) {
        temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swaps++;
      }
    }
  }

  return array
}

// console.log( bubbleSort( [2,6,1,7,2,6,4] ) );

function mergeSort( array ) {
  if ( array.length === 1 ) {
    return array;
  }

  half = Math.floor( array.length / 2 );

  var array1 = array.slice(0, half)
  var array2 = array.slice(half)

  return merge( mergeSort( array1 ), mergeSort( array2 ) );
}

function merge( array1, array2 ) {
  var mergedArray = [];

  while ( array1.length !== 0 || array2.length !== 0 ) {
    if ( array1.length === 0 ) {
      mergedArray.push( array2.shift() );
    } else if ( array2.length === 0 ) {
      mergedArray.push( array1.shift() );
    } else if ( array1[0] > array2[0] ) {
      mergedArray.push( array2.shift() );
    } else {
      mergedArray.push( array1.shift() );
    }
  }

  return mergedArray;
}

// console.log( mergeSort( [2,6,1,7,2,6,4] ) );

function quickSort( array, p, r ) {
  if ( p < r ) {
    var part = partition( array, p, r );
    quickSort( array, p, part - 1 );
    quickSort( array, part + 1, r ); 
  }
  return array;
}

function partition(array, low, high) {
  var pivot = array[high];

  for ( var i = low; i < high; i++ ) {
    if ( array[i] < pivot ) {
      array = swap( array, low, i);
      low ++;
    } 
  }

  array = swap( array, low, high);
  return low
}

function swap(array, low, i) {
  temp = array[low];
  array[low] = array[i];
  array[i] = temp;
  return array;
}
array = [2,6,1,7,2,6,4]
console.log( quickSort( array, 0, array.length - 1) );