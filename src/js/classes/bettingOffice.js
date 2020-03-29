import { Slug } from "./slug";
import { Race } from "./race";
import {Bet} from "./bet.js";
import {singleplayer as Player} from "./player.js";

class BettingOffice {
    slugList;
    raceList;
    betList;
    playerSelection;

    constructor() {
        console.log("%c[SYC] Betting-Office constructed", "color: rgb(120, 190, 255)");
    }

    toString = (directLog) => directLog
        ? console.log(JSON.parse(JSON.stringify(this)))
        : JSON.parse(JSON.stringify(this));

    startRace = (playerSelection) => {
        this.raceList = this.getCollection(1);
        this.slugList = this.getCollection(2);
        this.betList = this.getCollection(3);
        this.playerSelection = playerSelection;
        this.playerSelection[0].addSlugList(this.slugList);
        this.toString(true);
        this.playerSelection[0].startRace();
    }

    getCollection = (selectID) => {
        let collection = [];
        [...document.getElementById('select' + selectID).querySelectorAll('section')].forEach((item, index) => {
            collection.push(new Array());
            [...item.getElementsByClassName("value")].forEach(value => {
                collection[index].push(value.innerHTML);
            })
            switch (selectID) {
                case 3: collection[index] = new Bet(collection[index][0], collection[index][1]); break;
                case 2: collection[index] = new Slug(collection[index][0], collection[index][1]); break;
                case 1: collection[index] = new Race(collection[index][0], collection[index][1]); break;
            }
        });
        return collection;
    }

    toString = (directLog) => directLog
        ? console.log(JSON.parse(JSON.stringify(this)))
        : JSON.parse(JSON.stringify(this));


    endGame = (winner) => {
        console.log(winner)
        console.log(this.playerSelection[1])
        if(winner.name === this.playerSelection[1].name) {
            console.warn("PLAYER HAS WON");
            document.getElementsByClassName("balanceInner")[0].innerHTML = parseInt(document.getElementsByClassName("balanceInner")[0].innerHTML, 10) + (this.playerSelection[2].bet * 2)
            Player.balance =  parseInt(document.getElementsByClassName("balanceInner")[0].innerHTML, 10) + (this.playerSelection[2].bet * 2);
        } else {
            console.error("PLAYER HAS LOST")
            Player.balance =  parseInt(document.getElementsByClassName("balanceInner")[0].innerHTML, 10);
        }
        window.setTimeout(() => {
            if(Player.balance < 0 || isNaN(Player.balance) ) {
                document.querySelector("main").style.display = "none";
                document.querySelector("header").innerHTML = "<h1> Game Over </h1>";
            } else {
                document.getElementsByClassName("BreadCrumb")[0].style.display = "flex";
                document.getElementById("select1").style.display = "block";
                document.getElementById("game").style.display = "none";
                this.playerSelection[0].resetRace();
                this.playerSelection = null;
            }
        }, 3000)
    }
}

export let bettingOffice = new BettingOffice();