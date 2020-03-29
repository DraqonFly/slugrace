import { bettingOffice } from "./bettingOffice";

export class Race 
{
    name;
    unitsToGoal;
    slugList;
    interval;
    duration;
    winner;

    constructor(name, unitsToGoal)
    {
        this.name = name;
        this.unitsToGoal = unitsToGoal;
        this.duration = 0;
        this.winner = null;
        console.log("%c[SYC] Race-Office constructed", "color: rgb(120, 190, 255)");
    }

    toString = (directLog) => directLog  
    ? console.log(JSON.parse(JSON.stringify(this))) 
    : JSON.parse(JSON.stringify(this));

    addSlugList = (slugList) => this.slugList = slugList;

    startRace = () => {
        console.log("%c[SYC] Race started . . .", "color: gold");
        document.getElementById("game").innerHTML = "";
        this.slugList.forEach( (slug, index) => {
            document.getElementById("game").innerHTML += "<div class='racingSlug racingSlug"+index+"'> "+slug.name+" </div>";
        })
        this.interval = window.setInterval(this.letSlugsCreep, 500);
    }

    letSlugsCreep = () => {
        this.duration += 1;
        this.slugList.forEach( (slug, index) => { 
            if(this.winner === null) {
                let slugTravelled = slug.creep();
                let slugTravelledPercentage = parseInt( (slugTravelled / this.unitsToGoal) * 100);
                let slugsHTML = document.getElementsByClassName("racingSlug"+index)[0];
                console.log(document.getElementById('game').offsetWidth)

                if(slugTravelledPercentage >= 100){
                    slugTravelledPercentage = ( (document.getElementById('game').offsetWidth - document.getElementsByClassName('racingSlug')[0].offsetWidth) / document.getElementById('game').offsetWidth) * 100;
                } 
                console.log("%c[SYC] "+slug.name+" is at "+slugTravelledPercentage+"%");
                if(slugTravelled >= this.unitsToGoal) {
                    console.log("%c[SYC] WINNER FOUND: " + slug.name, "color: rgb(190, 255, 190");
                    this.winner = slug;
                    bettingOffice.endGame(this.winner);
                    window.clearInterval(this.interval);
                }
                slugsHTML.style.marginLeft = slugTravelledPercentage + "%";
            }
        })
        console.log("[SYC] Race duration: "+this.duration + "s")
    }

    resetRace = () => {
        this.slugList.forEach( (slug, index) => {
            if(index === 0) document.getElementById('step'+(index+1)).classList.add("--active");
            document.getElementById('step'+(index+1)).classList.remove("--done");
            document.getElementsByClassName('racingSlug')[index].marginLeft = 0 + "px";
            slug.travelledUnits = 0;
        })
        this.winner = null;
        this.duration = 0;
    }
} 