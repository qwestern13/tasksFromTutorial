function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        if (current > to) {
            clearInterval(timerId);
        } else {
            console.log(current++)}
    }, 1000)
}

//printNumbers(5,10);

function printNumbers1(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      } 
      current++;
    }, 1000);
}
  
 
printNumbers1(5, 10);