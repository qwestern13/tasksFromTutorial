Function.prototype.defer = function(ms) {
    return function(...args){
        setTimeout(() => f.apply(this, arguments), ms);
    }
}
function f(a, b) {
    console.log( a + b );
}
  
f.defer(1000)(17, 29);