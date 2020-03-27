export class Bet 
{
    bet;

    constructor(bet)
    {
        this.bet = bet;
        console.log("[SYC] Bet constructed");
    }

    toString = (directLog) => directLog  
    ? console.log(JSON.parse(JSON.stringify(this))) 
    : JSON.parse(JSON.stringify(this));
}