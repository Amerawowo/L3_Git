Array.prototype.square = function() {
    return this.map(num => num * num);
};

Array.prototype.cube = function() {
    return this.map(num => num * num * num);
};

Array.prototype.sum = function() {
    return this.reduce((total, num) => total + num, 0);
};

Array.prototype.average = function() {
    if (this.length === 0) return NaN;
    return this.sum() / this.length;
};

Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {
    return this.filter(num => num % 2 !== 0);
};