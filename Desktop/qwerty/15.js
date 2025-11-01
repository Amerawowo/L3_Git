function howManyTimes(time1,time2){
const start = new Date(time1);
    const end = new Date(time2);
    
    let strikes = 0;
    let current = new Date(start);
    
    while (current < end) {
        const hours = current.getHours();
        const minutes = current.getMinutes();
        const seconds = current.getSeconds();
        const strikeHour = hours % 12 || 12;
        
        if (minutes === 0 && seconds === 0) {

            const strikesToAdd = Math.min(strikeHour, Math.ceil((end - current) / 1000));
            strikes += strikesToAdd;
            current.setSeconds(current.getSeconds() + strikesToAdd);
        } else if (minutes === 30 && seconds === 0 && current < end) {

            strikes += 1;
            current.setSeconds(current.getSeconds() + 1);
        } else {
            current.setSeconds(current.getSeconds() + 1);
        }
    }
    
    return strikes;
}
