// function sumOfSquares(array) {
//     var sum = 0, 
//         i = array.length;
//         for (i = 0; i < array.length; i += 1) 
//      sum += Math.pow(array[i], 2);
//     return sum;
//   }
   
   
function sumOfSquares(array) {
    var sum = 0, 
        i = array.length;
        while (i--)
     sum += Math.pow(array[i], 2);
    return sum;
  }
 console.log(sumOfSquares([0,1,2,3,4,5]));