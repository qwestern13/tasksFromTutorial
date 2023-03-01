function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
  }

function checkAge2(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
  }
//Работают одинаково

function checkAge3(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

function pow(x, n) {
    if (n < 1) {
        return `Степень ${n} не поддерживается, используйте натуральное число`;
    } else {
        return x**n;
    }
  }  

console.log(pow(5, -1));