let i = 3;

while (i) {
  console.log( i-- );
}
//Последнее значение 1
console.log("");

let j = 0;
while (++j < 5) console.log( j ); //Выведет 1, 2, 3, 4 
console.log("");

let k = 0;
while (k++ < 5) console.log( k ); //Выведет 1, 2, 3, 4, 5
console.log("");

for (let x = 0; x < 5; x++) console.log( x ); //Выведет 0, 1, 2, 3, 4
console.log("");

for (let y = 0; y < 5; ++y) console.log( y ); //Выведет 0, 1, 2, 3, 4
console.log("");

for (let t = 2; t <= 10; t++) {
    if (t %  2 == 0) {
        console.log(t);
    }
}

let z = 0;
while (z < 3) {
  console.log( `number ${z}!` );
  z++;
}


let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}