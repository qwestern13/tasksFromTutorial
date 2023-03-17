function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(5)(-1));

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a,b) {
    return function(x) {
        return x >= a && x <= b;
    }
}

console.log(arr.filter(inBetween(3,6)));

function inArray(arr) {
    return function(x) {
        return arr.includes(x)
    }
}

console.log(arr.filter(inArray([1, 2, 10])));

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

  
  