console.log((6.35 * 10).toFixed(20) / 10 );

function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
console.log(`Число: ${readNumber()}`);

function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
  