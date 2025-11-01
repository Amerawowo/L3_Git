function bingo(ticket, win){
    let miniWins = 0;
    
    for (let i = 0; i < ticket.length; i++) {
        const [str, num] = ticket[i];
        let found = false;
        
        for (let j = 0; j < str.length; j++) {
            if (str.charCodeAt(j) === num) {
                found = true;
                break;
            }
        }
        
        if (found) {
            miniWins++;
        }
    }
    
    return miniWins >= win ? 'Winner!' : 'Loser!';
}