import "../scss/index.scss";
import {Bet} from "./classes/bet.js";
import {bettingOffice as BettingOffice} from "./classes/bettingOffice.js";
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
        [...e.target.parentNode.children].forEach(item => item.nodeName !== "BUTTON"  && item.nodeName !== "IMG"
            ? itemValues.push(item.getElementsByClassName("value")[0].innerHTML) : null)
            entry = [new Race(itemValues[0], itemValues[1]), new Slug(itemValues[0], itemValues[1]), new Bet(itemValues[0], itemValues[1]) ][step-1];
    }

    document.getElementById("select"+step).style.display = "none";
    document.getElementById("step"+step).classList.remove("--active");
    document.getElementById("step"+step).classList.add("--done");
    playerSelection[step-1] = entry;
    if(step === 3) {
        [...document.getElementById("select"+(step+1)).querySelector('section').children].forEach( (item, index) => 
        (item.nodeName !== "BUTTON"  && item.nodeName !== "IMG")
        ? item.innerHTML = playerSelection[index].name 
        ?? playerSelection[index].name + ":"+ playerSelection[index].bet : null
        );
    }
        
        
    if (step < 4)  {
        document.getElementById("step"+ (step+1) ).classList.add("--active");
        document.getElementById("select"+ (step+1) ).style.display = "block";
    } else {
        
        document.getElementsByClassName("BreadCrumb")[0].style.display = "none";
        document.getElementsByClassName("balanceInner")[0].innerHTML = parseInt(document.getElementsByClassName("balanceInner")[0].innerHTML, 10) - playerSelection[2].bet;
        document.getElementById("game").style.display = "block";
        BettingOffice.startRace(playerSelection);
    }
} 