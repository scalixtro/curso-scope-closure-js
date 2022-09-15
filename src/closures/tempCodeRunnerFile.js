function makeMultiplier(x) {

    function multiplier(n) {
        return n * x;
    }

    return multiplier;
}

// Debido al scope, multiplier recuerda el valor de 10
times10 = makeMultiplier(10);

for(let i = 1; i<= 10; i++) {
    console.log(times10(i))
}