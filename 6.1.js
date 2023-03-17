function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}

function sumToCycle(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum = sum + i;
    } 
    return sum;
}

function sumToFormula(n) {
    return n * (n + 1) / 2;
}
console.log(sumTo(100));
console.log(sumToCycle(100));
console.log(sumToFormula(100));

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(1));

function fib(n) {
    let a = 1;
    let b = 1;
    let c = 0;
    for(let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
console.log(fib(77));

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printList(list) {
    listTmp = list;
    while(listTmp) {
        console.log(listTmp.value);
        listTmp = listTmp.next;
    }
}


function printListRecurs(list) {
    console.log(list.value);
    if(list.next) {
        printListRecurs(list.next);
    }
}

printListRecurs(list);

function printReverseList(list) {
    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
}

function printReverseListCycle(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
}

printReverseListCycle(list);