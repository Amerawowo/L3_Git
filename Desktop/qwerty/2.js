function ipv4Parser(ip, mask) {
    const ipOctets = ip.split('.').map(Number);
    const maskOctets = mask.split('.').map(Number);
    
    const networkOctets = ipOctets.map((octet, i) => octet & maskOctets[i]);
    
    const hostOctets = ipOctets.map((octet, i) => octet - networkOctets[i]);
    
    return [
        networkOctets.join('.'),
        hostOctets.join('.')
    ];
}