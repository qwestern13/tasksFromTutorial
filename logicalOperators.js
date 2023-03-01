console.log( null || 2 || undefined );                      //2
console.log( console.log(1) || 2 || console.log(3) );       //1, 2
console.log( 1 && null && 2 );                              //null
console.log( console.log(1) && console.log(2) );            //1, undefined
console.log( null || 2 && 3 || 4 );                         //3

if (age >= 14 && age <= 90) {

}

if (-1 || 0) console.log( 'first' );            //Выполнится
if (-1 && 0) console.log( 'second' );           //Не выполнится
if (null || -1 && 1) console.log( 'third' );    //Выполнится

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        console.log( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        console.log( 'Отменено' );
    } else {
        console.log( 'Неверный пароль' );
    }

} else if (userName === '' || userName === null) {
    console.log( 'Отменено' );
} else {
    console.log( "Я вас не знаю" );
}