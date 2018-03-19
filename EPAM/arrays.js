function doubleArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = j+i+1;
    }
  }
  return arr;
}
var res = doubleArray(4,4);
console.log(res);

var n = 0;
array = [];
for (i=0; i<3; i++){
 array[i] = []
 for (ii = 0; ii<3; ii++){
   n++;
   array[i].push(n)
 }
}
console.log(array);
