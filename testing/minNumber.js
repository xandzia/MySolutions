function minNumber(arr){
    let min=0;
    let digits = (''+arr).split('');
    const length = digits.length-1;
    for(let i=0; i<length; i++) {
        if(Number(digits[0])<Number(digits[1])){
            min = Number(digits[0]);
            digits.splice(1,1);
        } else {
            min = Number(digits[1]);            
            digits.splice(0,1);
        }
    }
    return min;
}
console.log(minNumber(129384756));