let x;
let y;

var player = {
    phealth : 100,
    defAtt : function(y){

        y = Math.floor(Math.random() * 20) + 1;

        if (y <= 5){
            alert("Dodged")
        }
        else if (y > 5 && y <=10){
            this.phealth - 5;
        }
        else if (y > 10 && y <=15){
            this.phealth - 10;
        }
        else if (y > 15 && y <= 19){
            this.phealth - 15;
        }
        else {
            this.phealth - 25;
        }
    }
}

var monster = {
    mhealth : 200,
    monDef : function(x){

        x = Math.floor(Math.random() * 20);

        if (x <= 5){
            alert("Dodged");
        }
        else if (x > 5 && x <=10){
            this.mhealth - 10;
            alert("Dealt 10 dmge");
        }
        else if (x > 10 && x <=15){
            this.mhealth - 15;
            alert("Dealt 15 dmge");
        }
        else if (x > 15 && x <= 19){
            this.mhealth - 25;
            alert("Dealt 25 dmge");
        }
        else {
            this.mhealth - 50;
            alert("Critical hit! 50 dmge");
        }
    }

}

var dRoll = document.getElementById("dDie").onclick;
dDie.onclick=monster.monDef;


var monsterHealth = document.getElementById("monHp");
monHp.textContent=monster.mhealth;
