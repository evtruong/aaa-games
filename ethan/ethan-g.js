let x;
let y;
let newHp;
let newMHp;

var player = {
    phealth : 100,
    miss: 0,
    whit: 10,
    mhit: 15,
    hhit: 20,
    crit: 30,
    defAtt : function(y, newMHp){

        y = Math.floor(Math.random() * 20) + 1;
        newMHp = monster.health;

        if (y <= 5){
            alert("Dodged");
            newMHp = monster.mhealth - this.miss;
            return newMHp;
        }
        else if (y > 5 && y <=10){
            alert("Weak hit! 10 dmge");
            newMHp = monster.mhealth - this.whit;
            return newMHp;
        }
        else if (y > 10 && y <=15){
            alert("Medium hit! 15 dmge");
            newMHp = monster.mhealth - this.mhit;
            return newMHp;
        }
        else if (y > 15 && y <= 19){
            alert("Heavy hit! 20 dmge");
            newMHp = monster.mhealth - this.hhit;
            return newMHp;
        }
        else {
            alert("Critical hit! 30 dmge");
            newMHp = monster.mhealth - this.crit;
            return newMHp;
        }
    }
}

var monster = {
    mhealth : 200,
    miss: 0,
    whit: 5,
    mhit: 10,
    hhit: 15,
    crit: 25,
    monDef : function(x, newHp){

        x = Math.floor(Math.random() * 20) + 1;
        newHp = player.phealth;
      
        if (x <= 5){
            alert("Dodged");
            var newHp= player.phealth - this.miss;
            return newHp;
        }
        else if (x > 5 && x <=10){
          alert("Weak hit! 10 dmge");
            var newHp= player.phealth - this.whit;
            return newHp;
        }
        else if (x > 10 && x <=15){
          alert("Medium hit! 15 dmge");
            var newMp= player.phealth - this.mhit;
            return newHp;
        }
        else if (x > 15 && x <= 19){
          alert("Heavy hit! 25 dmge");
            var newHp= player.phealth - this.hhit;
            return newHp;
        }
        else {
          alert("Critical hit! 50 dmge");
            var newHp= this.mhealth - this.crit;
            return newHp;
        }
    }

}

var playerHealth = document.getElementById("pHp");
pHp.textContent=player.defAtt[newMHp];

var dRoll = document.getElementById("dDie").onclick;
dDie.onclick=player.defAtt;


var monsterHealth = document.getElementById("monHp");
monHp.textContent=monster.monDef[newHp];