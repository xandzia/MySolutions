function parseNumber(num) {
    let res = {
        odd: 0,
        even: 0,
    }
    if (typeof(num) === "string") {
        res = false;
    } else {
        let digits = ("" + num).split("");
        for (let i = 0; i < digits.length; i++) {
            (Number(digits[i]) % 2 === 0) ? res.even += 1 : res.odd += 1;
        }
    }
    return res;
}

console.log(parseNumber(34567));
console.log(parseNumber(100));
console.log(parseNumber("aaaa"));
