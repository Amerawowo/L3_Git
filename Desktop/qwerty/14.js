function isCircleSorted( arr ){
const n = arr.length;
    if (n === 0) return true;
    
    let decreases = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            decreases++;
        }
    }
    return decreases <= 1;
}