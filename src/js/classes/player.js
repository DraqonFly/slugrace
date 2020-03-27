class Player 
{
    name;
    balance;

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        console.log("[SYC] Player constructed");
    }

    toString = (directLog) => directLog  
        ? console.log(JSON.parse(JSON.stringify(this))) 
        : JSON.parse(JSON.stringify(this));
}

export let singleplayer = new Player(420, "Sam");