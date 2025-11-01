function hasTwoCubeSums(n) {
    let pairs = [];
    let a = 1;
    
    while (a * a * a <= n) {
        let bCube = n - a * a * a;
        let b = Math.round(Math.pow(bCube, 1/3));
        
        if (b * b * b === bCube && b >= a) {
            pairs.push([a, b]);
        }
        a++;
    }
    
    if (pairs.length < 2) {
        return false;
    }
    
    for (let i = 0; i < pairs.length; i++) {
        let [a1, b1] = pairs[i];
        for (let j = i + 1; j < pairs.length; j++) {
            let [a2, b2] = pairs[j];
            if (a1 !== a2 && a1 !== b2 && b1 !== a2 && b1 !== b2) {
                return true;
            }
        }
    }
    
    return false;
}