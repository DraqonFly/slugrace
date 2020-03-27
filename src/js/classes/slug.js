export class Slug 
{
    name;
    speed;
    travelledUnits;

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.travelledUnits = 0;
        console.log("[SYC] Slug constructed");
    }

    toString = (directLog) => directLog  
    ? console.log(JSON.parse(JSON.stringify(this))) 
    : JSON.parse(JSON.stringify(this));
}