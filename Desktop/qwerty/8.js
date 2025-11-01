function expandedForm(num) {
const numStr = num.toString();
    const parts = [];
    
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        if (digit !== 0) {
            const placeValue = digit * Math.pow(10, numStr.length - 1 - i);
            parts.push(placeValue.toString());
        }
    }
    
    return parts.join(' + ');
}