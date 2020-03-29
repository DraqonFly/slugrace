export class Slug 
{
    name;
    speed;
    travelledUnits;

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.travelledUnits = 0;
        console.log("%c[SYC] Slug constructed", "color: rgb(120, 190, 255)");
    }

    toString = (directLog) => directLog  
    ? console.log(JSON.parse(JSON.stringify(this))) 
    : JSON.parse(JSON.stringify(this));

    creep = () => {
        this.travelledUnits += this.getSpeed(this.speed);
        console.log('[SYC] WARNING: '+this.name+'creeping! ('+this.travelledUnits+')')
        return this.travelledUnits;
    }

    getSpeed = (max) => Math.floor(Math.random() * (max - 1 + 1 )) + 1;
}