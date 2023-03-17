function debounce(f, ms) {
    isActive = true;
    return function() {
        if(!isActive) return;
        f.apply(this, arguments);
        isActive = false;
        setTimeout(() => (isActive = true, ms)) 
    }
}

let f = debounce(console.log, 1500);

f(1); // выполняется немедленно
f(2); // проигнорирован

