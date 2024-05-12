let x;
let y;

var player = {
    health = 100,
    dmge = function(y){

        y = Math.floor(Math.random() * 20) + 1;

        if (y <= 5){
            alert("Dodged")
        }
        else if (y > 5 && y <=10){
            this.health - 5;
        }
        else if (y > 10 && y <=15){
            this.health - 10;
        }
        else if (y > 15 && y <= 19){
            this.health - 15;
        }
        else {
            this.health - 25;
        }
    }
}

var monster = {
    health = 200,
    dmge = function(x){

        x = Math.floor(Math.random() * 20) + 1;

        if (x <= 5){
            alert("Dodged")
        }
        else if (x > 5 && x <=10){
            this.health - 10;
        }
        else if (x > 10 && x <=15){
            this.health - 15;
        }
        else if (x > 15 && x <= 19){
            this.health - 25;
        }
        else {
            this.health - 50;
        }
    }

}

var pRoll = document.getElementById("pDie").onclick;


var monsterHealth = document.getElementById("monHp");
monHp.textContent=monster.health;
