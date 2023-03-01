let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // 4

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();// a', 'b', [Function (anonymous)]

function sumInput() {
    let numbers = [];

    while(true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(Number(value));
    }
    let sum = 0;
    for(let number of numbers) {
        sum = sum + number;
    }
    return sum;
}