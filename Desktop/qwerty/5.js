function primeFactors(n){
let factors = {};
    let divisor = 2;
    
    while (n >= 2) {
        if (n % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1;
            n /= divisor;
        } else {
            divisor++;
        }
    }
    
    let result = '';
    for (let prime in factors) {
        if (factors[prime] === 1) {
            result += `(${prime})`;
        } else {
            result += `(${prime}**${factors[prime]})`;
        }
    }
    
    return result;
}