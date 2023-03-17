function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
};

function spy(func) {

    function wrapper(...args) {
      wrapper.calls.push(args);
      return func(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
}
work = spy(work);
  
work(1, 2); // 3
work(4, 5); // 9
  
for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

//---------------------------------------

function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}
  
// создаём обёртки
//let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
  
//f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
