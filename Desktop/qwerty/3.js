function whatCentury(year)
{
    const y = parseInt(year);
    
    const century = Math.floor((y - 1) / 100) + 1;
    
    if (century % 100 >= 11 && century % 100 <= 13) {
        return century + 'th';
    }
    
    switch (century % 10) {
        case 1: return century + 'st';
        case 2: return century + 'nd';
        case 3: return century + 'rd';
        default: return century + 'th';
    }
}