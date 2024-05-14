let x;
let y;

var player = {
    phealth : 100,
    defAtt : function(y){

        y = Math.floor(Math.random() * 20) + 1;

        if (y <= 5){
            alert("Dodged");
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
    miss: 0,
    whit: 10,
    mhit: 15,
    hhit: 25,
    crit: 50,
    monDef : function(x){

        x = Math.floor(Math.random() * 20) + 1;

        if (x <= 5){
            alert("Dodged");
            var newMHp= this.mhealth - this.miss;
            return newMHp;
        }
        else if (x > 5 && x <=10){
          alert("Weak hit! 10 dmge");
            var newMHp= this.mhealth - this.whit;
            return newMHp;
        }
        else if (x > 10 && x <=15){
          alert("Medium hit! 15 dmge");
            var newMHp= this.mhealth - this.mhit;
            return newMHp;
        }
        else if (x > 15 && x <= 19){
          alert("Heavy hit! 25 dmge");
            var newMHp= this.mhealth - this.hhit;
            return newMHp;
        }
        else {
          alert("Critical hit! 50 dmge");
            var newMHp= this.mhealth - this.crit;
            return newMHp;
        }
    }

}

var dRoll = document.getElementById("dDie").onclick;
dDie.onclick=monster.monDef;


var monsterHealth = document.getElementById("monHp");
monHp.textContent=monster.newMHp;