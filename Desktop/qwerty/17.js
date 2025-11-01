function cache(func) {
    const cache = new Map();
    
    return function(...args) {
        let key = '';
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            if (arg === null || arg === undefined) {
                key += 'null;';
            } else if (typeof arg === 'object') {
                key += 'obj:' + Object.keys(arg).sort().join(',') + ';';
            } else {
                key += arg + ';';
            }
        }
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = func.apply(this, args);
        cache.set(key, result);
        
        return result;
    };
}