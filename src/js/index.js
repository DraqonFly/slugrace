import "../scss/index.scss";
import {Bet} from "./classes/bet.js";
import {BettingOffice} from "./classes/bettingOffice.js";
import {singleplayer as Player} from "./classes/player.js";
import {Slug} from "./classes/slug.js";
import {Race} from "./classes/race.js";

console.info("%c[SYC] Javacsript initialized!", "color: orange")
let message = undefined ?? console.log("%c[SYC] ES2020 features working!", "color: orange");
let playerSelection = ["Race", "Slug", "Bet"];

window.select = (step, type, value) => {
    const e = e ?? window.event; 
    console.log("%c[SYC] step"+step+": "+type+" -> "+value+" "+type, "color:  #ff4d4d");
    let entry = null;

    if(step !== 4) {
        let itemValues = [];
        [...e.target.parentNode.children].forEach(item => {
                if(item.nodeName !== "BUTTON")
                itemValues.push(item.getElementsByClassName("value")[0].innerHTML)
            }, console.log(itemValues)
        )
        
        switch(step) {
            case 1: entry = new Race(itemValues[0], itemValues[1]); break;
            case 2: entry = new Slug(itemValues[0], itemValues[1]); break;
            case 3: 
                entry = new Bet(itemValues[1]); 
            break;
        }
    }

    document.getElementById("select"+step).style.display = "none";
    document.getElementById("step"+step).classList.remove("--active");
    playerSelection[step-1] = entry;
    console.log(playerSelection)

    if(step === 3) 
        [...document.querySelector(".item--last").children].forEach( (item, index) => 
            item.nodeName !== "BUTTON" 
                ? item.innerHTML = playerSelection[index].name 
                ?? playerSelection[index].bet : null
         );
    

    if (step < 4)  {
        document.getElementById("step"+ (step+1) ).classList.add("--active");
        document.getElementById("select"+ (step+1) ).style.display = "block";
    } else {
        document.getElementsByClassName("BreadCrumb")[0].style.display = "none";
        document.getElementById("game").style.display = "block";
    }

} 