////   1
//function one(x) {
//    const st = x**3;
//    const d = st + 0.001; //0.126
//    const c = st +(0.01/d); //0.204...
//    const b = st +(0.1/c);
//    const res = x/b;
//    return res;
//}
//console.log(one(0.5))
//
////  2
//function two(a, b, c) {
//    if ((a>b && a<c) || (a<b && a>c)) {
//        return a;
//    } else if ((b>a && b<c) || (b==a && c<b)){
//        return b;
//    } else {
//        return c
//    }
//}
//console.log(two(5,0,100))
//console.log(two(5,0,1))
//console.log(two(5,20,100))
//console.log(two(5,20,1))
//console.log(two(5,20,10))
//console.log(two(12,12,11))
//console.log(two(2,3,2))
//console.log(two(12,3,3))
//console.log(two(8,8,8))
//
////  3
//function three(row) {
//    let x = ""
//    for (let i=0; i<row; i++) {
//        console.log(x+="#")
//    }
//}
//console.log(three(7))

//  4
function four(row) {
    let i = 0, k = 0, y = 0
    var space = ""
        hash = ""
        x = ""

    while (i < row) {
        space = ""
        hash = ""
        for (k = 0; k < row - i; k++) {
            space += " "  
        }
        for (k = 0; k < i + 1; k++) {
            hash += "#"   
        }
        for (y=0; y<k-i; y++) {
            x+="#"
        }
        console.log(space + hash + "  " +x)
        i++
    }
}
console.log(four(7))
