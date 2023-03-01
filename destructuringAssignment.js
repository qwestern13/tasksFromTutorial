let user = {
    name: "John",
    years: 30
};
  
let {name, years: age, isAdmin = false} = user;
  
console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
}