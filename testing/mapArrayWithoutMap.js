var friends = [
    { name: ‘John’, age: 22 },
    { name: ‘Peter’, age: 23 },
    { name: ‘Mark’, age: 24 },
    { name: ‘Maria’, age: 22 },
    { name: ‘Monica’, age: 21 },
    { name: ‘Martha’, age: 19 },
]

var friendsNames = Array.from(friends, ({name}) => name);
console.log(friendsNames); // returns [“John”, “Peter”, “Mark”, “Maria”, “Monica”, “Martha”]
