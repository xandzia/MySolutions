//   1
function one(x) {
    const st = x ** 3;
    const d = st + 0.001; //0.126
    const c = st + (0.01 / d); //0.204...
    const b = st + (0.1 / c);
    const res = x / b;
    return res;
}
console.log("%o","Завдання 1")
console.log(one(0.5))

//  2
function two(a, b, c) {
    if ((a > b && a < c) || (a < b && a > c)) {
        return a;
    } else if ((b > a && b < c) || (b == a && c < b)) {
        return b;
    } else {
        return c
    }
}
console.log("%o","Завдання 2")
console.log(two(5, 0, 100))
console.log(two(5, 0, 1))
console.log(two(5, 20, 100))
console.log(two(5, 20, 1))
console.log(two(5, 20, 10))
console.log(two(12, 12, 11))
console.log(two(2, 3, 2))
console.log(two(12, 3, 3))
console.log(two(8, 8, 8))

//  3
console.log("%o","Завдання 3")
three(7)
function three(row) {
    let x = ""
    for (let i = 0; i < row; i++) {
        console.log(x += "#")
    }
}

//  4
console.log("%o","Завдання 4")
four(7)
function four(row) {
    let i = 0,
        k = 0,
        y = 0
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
        for (y = 0; y < k - i; y++) {
            x += "#"
        }
        console.log(space + hash + "  " + x)
        i++
    }
}

// 5
function delivery(sum) {
    const twentyFive = 0.25
    const ten = 0.10
    const five = 0.05
    const one = 0.01

    let counter = 0;
    while (sum >= twentyFive) {
        sum = parseFloat(sum - twentyFive).toFixed(2)
        counter++
    }
    while (sum >= ten) {
        sum = parseFloat(sum - ten).toFixed(2)
        counter++
    }
    while (sum >= five) {
        sum = parseFloat(sum - five).toFixed(2)
        counter++
    }
    while (sum >= one) {
        sum = parseFloat(sum - one).toFixed(2)
        counter++
    }
    return counter;

}
console.log("%o","Завдання 5")
console.log(delivery(0.41))
console.log(delivery(23))
console.log(delivery(1.6))
console.log(delivery(8.7))
console.log(delivery(4.2))

// 7
console.log("%o","Завдання 7")
const arr = [3, 5, -3, 0, 9, -2]
const arr1 = [3, 5, 1, 0, 9, -2]
console.log("Вхідні дані: ",arr)
order(arr)
console.log("Вхідні дані: ",arr1)
order(arr1)
function order(arr) {
    let min = Math.min.apply(null, arr)
    let max = Math.max.apply(null, arr)
    for (let i = 0; i <= arr.length; i++) {
        let digitBefore;
        let first = arr[0]
        let last = arr[arr.length-1]
        if (i % 2 == 0) {
            if(arr[i]===max) {
                digitBefore = arr[i-1]
                arr[i-1]=arr[i]
                arr[i] = digitBefore
            }
            if(arr[i]===min) {
                digitBefore = arr[i-1]
                arr[i-1]=arr[i]
                arr[i] = digitBefore
            }
        } else {
            arr[0] = last
            arr[arr.length-1] = first
        }
    }
    console.log("Результат: ",arr)
}

// 9
console.log("%o","Завдання 9")
console.log(correct(")("))
console.log(correct("(()(()"))
console.log(correct("(()(()()))"))
console.log(correct("())()(()())(()"))

function correct(text) {
    let i,
    l=text.length,
    index,
    last,
    arr = []

    for (i=0; i<l; i++) {
        index=text[i]
        
        if (index=="(") {
            arr.push(index)
        } else if (index==")") {
            if (arr.length>0) {
                last=arr[arr.length-1];
                if ((index == ')' && last == '(')) {
                    arr.pop()
                }
            }
        }
    }
    
    return (arr.length==0) ? "YES" : "NO"
}































