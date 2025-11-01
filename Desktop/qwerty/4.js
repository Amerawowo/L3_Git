function findMissing(list) {  
const n = list.length;
    const totalDiff = list[n - 1] - list[0];
    
    const commonDiff = totalDiff / n;
    
    for (let i = 0; i < n - 1; i++) {
        if (list[i + 1] - list[i] !== commonDiff) {
            return list[i] + commonDiff;
        }
    }
return list[0];
}