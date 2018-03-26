function reverseInt(num) {
    num = num.toString();
    return (num.split('').reverse().join(''));
}
console.log(reverseInt(123));
