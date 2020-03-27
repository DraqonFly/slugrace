export class Race 
{
    name;
    unitsToGoal;
    slugList;

    constructor(name, unitsToGoal, slugList)
    {
        this.slugList = slugList;
        this.name = name;
        this.unitsToGoal = unitsToGoal;
        console.log("[SYC] Race constructed");
    }

    toString = (directLog) => directLog  
    ? console.log(JSON.parse(JSON.stringify(this))) 
    : JSON.parse(JSON.stringify(this));
}