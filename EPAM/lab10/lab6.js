// 6
function creditCard(num) {
    let length = Math.log(num) * Math.LOG10E + 1 | 0;
    let output;
    if (length === 15) {
        let firstNums = Math.floor(Number(num / 10000000000000))
        if (firstNums === 34 || firstNums === 37) {
            output = (cardSum(num)) ? 'AMEX' : 'INVALID'
        }
    } else if (length === 16) {
        let firstNums = Math.floor(Number(num / 100000000000000))
        if (firstNums === 51 || firstNums === 52 || firstNums === 53 || firstNums === 54 || firstNums === 55) {
            output = (cardSum(num)) ? 'MASTERCARD' : 'INVALID'
        } else {
            let firstNums = Math.floor(Number(num / 1000000000000000))
            if (firstNums === 4) {
                output = (cardSum(num)) ? 'VISA' : 'INVALID'
            }
        }
    } else if (length === 13) {
        let firstNums = Math.floor(Number(num / 1000000000000))
        console.log(firstNums)
        if (firstNums === 4) {
            output = (cardSum(num)) ? 'VISA' : 'INVALID'
        }
    } else {
        output = 'INVALID'
    }
    return output;
}

function cardSum(num) {
    let length = Math.log(num) * Math.LOG10E + 1 | 0;
    const arr = []
    let a = 1
    let d = 10
    for (let i = 0; i < length; i++) {
        let m = Math.floor(Number(num / a))
        let b = Math.floor(m / d) * 10
        a = a * 10
        let digit = m - b
        arr.push(digit)
    }
    for (let i = 1; i <= arr.length; i++) {
        if (i % 2 == 0) {
            arr[i - 1] = oddNumber(arr[i - 1])
        }
    }

    function oddNumber(num) {
        num = num * 2
        let one = Math.floor(num / 10)
        let two = num - one * 10
        num = one + two
        return num
    }

    let newArr = arr.reduce((acc, value) => {
        return acc + value
    })
    if (newArr % 10 === 0) {
        return true
    } else {
        return false
    }
}

console.log(creditCard(378282246310005))
console.log(creditCard(371449635398431))
console.log(creditCard(5555555555554444))
console.log(creditCard(5105105105105100))
console.log(creditCard(4012888888881881))
console.log(creditCard(4012888888881880))
console.log(creditCard(1234567890))
