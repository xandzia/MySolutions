class Burger{
    constructor(size, topping){
        this.size = {
            small: {
                price: 10,
                kcal: 10
            },
            big: {
                price: 20,
                kcal: 20
            }
        }
        this.topping = {
            cheese: {
                price: 5,
                kcal: 5
            },
            tomato: {
                price: 3,
                kcal: 3
            }
        }
    }
    addToping(topping) {

    }
    calculatePrice(size, topping) {
        
    }
};

const a = new Burger();
    console.log();

var n = 4, m = 4;
var mas = [];
for (var i = 0; i < m; i++){
    mas[i] = [];
    for (var j = 0; j < n; j++){
        mas[i][j] = 0;
}}
console.log(mas);

function doubleArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = j+i+1+i;
    }
  }
  return arr;
}
var res = doubleArray(4,4);
console.log(res);