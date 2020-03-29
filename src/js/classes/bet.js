export class Bet 
{
    name;
    bet;

    constructor(name, bet)
    {
        this.name = name + "("+bet+"$)";
        this.bet = bet;
        console.log("%c[SYC] Bet constructed", "color: rgb(120, 190, 255)");
    }

    toString = (directLog) => directLog  
    ? console.log(JSON.parse(JSON.stringify(this))) 
    : JSON.parse(JSON.stringify(this));
}