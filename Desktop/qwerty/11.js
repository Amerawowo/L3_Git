function domainName(url){
    let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
    
    domain = domain.split(/[.\/]/)[0];
    
    return domain;

}