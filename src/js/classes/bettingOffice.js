export class BettingOffice 
{
    raceList;
    betList;
    playerSelection;

    constructor(raceList, betList)
    {
        this.betList = betList;
        this.raceList = raceList;
        console.log("[SYC] Betting-Office constructed");
    }

    toString = (directLog) => directLog  
    ? console.log(JSON.parse(JSON.stringify(this))) 
    : JSON.parse(JSON.stringify(this));
}