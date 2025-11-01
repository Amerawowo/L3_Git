function longest(arr, n) {
const indexedArr = arr.map((str, index) => ({ str, index, length: str.length }));
    
    indexedArr.sort((a, b) => {
        if (b.length !== a.length) {
            return b.length - a.length;
        }
        return a.index - b.index;
    });
    
    return indexedArr[n - 1].str;
}