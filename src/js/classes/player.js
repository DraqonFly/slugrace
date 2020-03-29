class Player 
{
    name;
    balance;

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        console.log("%c[SYC] Player constructed", "color: rgb(120, 190, 255)");
    }

    toString = (directLog) => directLog  
        ? console.log(JSON.parse(JSON.stringify(this))) 
        : JSON.parse(JSON.stringify(this));
}

export let singleplayer = new Player(420, "Sam");