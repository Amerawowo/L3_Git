function solution(str){
const result = [];
    
    for (let i = 0; i < str.length; i += 2) {
        let pair = str.substr(i, 2);
        if (pair.length === 1) {
            pair += '_';
        }
        result.push(pair);
    }
    
    return result;
}