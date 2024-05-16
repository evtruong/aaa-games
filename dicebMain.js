//EARLY DEVELOPMENT BELOW//
//Used to set the level of the Enemy
var enemylevel = [1,2,3];
function enemiesCreate(){
  let enemyskill = Math.floor(Math.random() * 10);
  randomizeEncounter(enemyskill);
}
//Enemy statistics
var enemystatistics = {
  unitsleftE:200,

  enemycombat:function(enemyresult){
    this.unitsleftE=this.unitsleftE-enemyresult;
    var unitsleftE = document.getElementById("enemyhealthstat");
    unitsleftE.innerHTML = this.unitsleftE;
  },
  enemyunit:function(enemyTotalUnits){
    this.unitsleftE = enemyTotalUnits ;
    var healthofenemy = document.getElementById("enemyhealthstat");
    healthofenemy.innerHTML = this.unitsleftE;
  }
}
//Player statistics as they play the game
var statistics = {
  wins:0,
  losses:0,
  draws:0,
  unitsleft:0,
  totalbattles:0,
  winStreak:0, //Work On
  soldiersKilled:0,
  winlossratio:0,

  win:function(){
    this.wins=this.wins+1;
    var playerwins = document.getElementById("winsstat");
    playerwins.innerHTML=this.wins;
  },
  loss:function(){
    this.losses=this.losses+1;
    var playerlosses = document.getElementById("lossesstat");
    playerlosses.innerHTML=this.losses;
  },
  draw:function(){
    this.draws=this.draws+1;
    var playerdraws = document.getElementById("drawsstat");
    playerdraws.innerHTML=this.draws;
  },
  battlecount:function(){
    this.totalbattles=this.totalbattles+1;
    var battletot = document.getElementById("totalbattles");
    battletot.innerHTML = this.totalbattles;
  },
  unit:function(life){
    this.unitsleft = life ;
    var healthofuser = document.getElementById("healthstat");
    healthofuser.innerHTML = this.unitsleft;
  },
  combat:function(result){
    this.unitsleft=this.unitsleft-result;
    document.getElementById("healthstat").innerHTML=this.unitsleft;
  },
  tallydeath:function(result,enemyresult){
    if(result>enemyresult){
      this.soldiersKilled = this.soldiersKilled + enemyresult;
    }
    else if(result<enemyresult){
      this.soldiersKilled = this.soldiersKilled + result;
    }
    else if (result==enemyresult){
      this.soldiersKilled = this.soldiersKilled + result;
    }
    var playerSoldiersKilled = document.getElementById("soldiersKstat");
    playerSoldiersKilled.innerHTML = this.soldiersKilled;
  },
  ratiocalc:function(){
    this.winlossratio = Math.floor(((this.wins+this.draws)/this.totalbattles)*100);
    var winLossRat= document.getElementById("winlossratio");
    winLossRat.innerHTML = this.winlossratio;
  },
}
//EARLY DEVELOPMENT ABOVE//
//ADD HP TO BOTH SIDES// 
// Source - https://codepen.io/Pyremell/pen/eZGGXX //
var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  //Prints dice roll to the page
  
  function printNumber(number,enemyresult){
    //places number rolled in the battlefield (USER ROLL)//
    var placeholder = document.getElementById('user');
    placeholder.innerHTML = number;
    //places number rolled in the battlefield (ENEMY ROLL)//
    var enemyplaceholder = document.getElementById('enemy');
    enemyplaceholder.innerHTML = enemyresult;
  }
  
  var button = document.getElementById('roll');
  
  button.onclick = function() {
    //Determines the image presented based on the roll//
    var result = dice.roll();
    var enemyresult = dice.roll();

    //Determines the image presented based on the roll (FOR THE USER)//
    if (result===1){
      var dierolled = "diemedia/dice-1.jpg";
    }
    else if (result===2){
      var dierolled = "diemedia/dice-2.jpg";
    }
    else if (result===3){
      var dierolled = "diemedia/dice-3.jpg";
    }
    else if (result===4){
      var dierolled = "diemedia/dice-4.jpg";
    }
    else if (result===5){
      var dierolled = "diemedia/dice-5.jpg";
    }
    else if (result===6){
      var dierolled = "diemedia/dice-6.jpg";
    }

    //Determines the image presented based on the roll (FOR THE ENEMY)//
      if (enemyresult===1){
        var enemydierolled = "diemedia/dice-1.jpg";
      }
      else if (enemyresult===2){
        var enemydierolled = "diemedia/dice-2.jpg";
      }
      else if (enemyresult===3){
        var enemydierolled = "diemedia/dice-3.jpg";
      }
      else if (enemyresult===4){
        var enemydierolled = "diemedia/dice-4.jpg";
      }
      else if (enemyresult===5){
        var enemydierolled = "diemedia/dice-5.jpg";
      }
      else if (enemyresult===6){
        var enemydierolled = "diemedia/dice-6.jpg";
      }
    //The if statement that allows the user to continue fighting
    function determineEnd(result){
      if (statistics.unitsleft<6){
        alert("You've lost the war...");
      }
      else if(enemystatistics.unitsleftE<6){
        alert("Congratulations, you've won the war!")
      }
      else if(statistics.unitsleft<6 && enemystatistics.unitsleftE<6){
        alert("This war was a draw!")
      }
      else{
        changeImg(dierolled,enemydierolled);
        printNumber(result,enemyresult);
        statistics.battlecount();
        statistics.combat(result);
        enemystatistics.enemycombat(enemyresult);
        seeWinner(result,enemyresult);
        battleColor(result,enemyresult);
        statistics.tallydeath(result,enemyresult);
        statistics.ratiocalc();
      }
    }
    determineEnd(result);
  };

  //Gives color to show as a visual indicator who won
  function battleColor(result,enemyresult){
    if(result===enemyresult){
      document.getElementById('user').style.color = ('yellow');
      document.getElementById('enemy').style.color = ('yellow');
    }
    else if(result>enemyresult){
      document.getElementById('user').style.color = ('green');
      document.getElementById('enemy').style.color = ('red');
    }
    else if(result<enemyresult){
      document.getElementById('user').style.color = ('red');
      document.getElementById('enemy').style.color = ('green');
    }
  }
  //Displays results of who wins the battle
   function seeWinner(result,enemyresult){
    if (result===enemyresult){
      var winner = document.getElementById('resultofwinner');
      winner.innerHTML = "DRAW";
      winner.style.color = ('yellow');
      basicUpdateStat(winner.innerHTML);
    }
    else if (result>enemyresult){
      var winner = document.getElementById('resultofwinner');
      winner.innerHTML = "WIN";
      winner.style.color = ('green');
      basicUpdateStat(winner.innerHTML);
    }
    else if (result<enemyresult){
      var winner = document.getElementById('resultofwinner');
      winner.innerHTML = "LOSS";
      winner.style.color = ('red');
      basicUpdateStat(winner.innerHTML);
    }
   }

   //Puts in the image into the div
   function changeImg(imgFile,enemyimgFile){
    let userimg = document.querySelector("#userimg");
    userimg.setAttribute("src", imgFile);
    let enemyimg = document.querySelector("#enemyimg");
    enemyimg.setAttribute("src", enemyimgFile);
   };

   //Updates Basic Player Stats
   function basicUpdateStat(statuscondition){
    if(statuscondition==="WIN"){
      statistics.win();
    }
    else if (statuscondition==="LOSS"){
      statistics.loss();
    }
    else if (statuscondition==="DRAW"){
      statistics.draw();
    }
   }
   //Prompt that the user is greeted with to know how many units they'd like to use
   //Attempt to make it so the user can only input integer values
   document.addEventListener("onload",customprompt());
   function customprompt(){
    let totalUnits = prompt("How many units would you like to have?");
    parseInt(totalUnits);
    statistics.unit(totalUnits);

    let username1 = prompt("What will be your leader's name?");
    let username2 = username1;
    document.getElementById("usersnameone").innerHTML= username1;
    document.getElementById("usersnametwo").innerHTML = username2;
    enemiesCreate()
   }
  //Allows for the restarting of 
  var restart = document.getElementById("restart");

  restart.onclick = function(){
    document.getElementById("winsstat").innerHTML = statistics.wins = 0;
    document.getElementById("lossesstat").innerHTML = statistics.losses = 0;
    document.getElementById("drawsstat").innerHTML = statistics.draws = 0;
    document.getElementById("healthstat").innerHTML = statistics.unitsleft = 0;
    document.getElementById("totalbattles").innerHTML = statistics.totalbattles = 0;
    document.getElementById("soldiersKstat").innerHTML = statistics.soldiersKilled = 0;
    document.getElementById("winlossratio").innerHTML = statistics.winlossratio = 0;
    customprompt();
  }
  //FIND A SIMPLER WAY TO DO THIS ABOVE//
  function randomizeEncounter(enemyskill){
    if (enemyskill>0 && enemyskill<7){
      enemyskill = enemylevel[0];
      setEnemyStats(enemyskill);
    }
    else if(enemyskill>=7 && enemyskill<10){
      enemyskill = enemylevel[1];
      setEnemyStats(enemyskill);
    }
    else if(enemyskill==10){
      enemyskill = enemylevel[2];
      setEnemyStats(enemyskill);
    }
  }
  //Gives difficulty of enemy and sets units before battle
  function setEnemyStats(enemyskill){
    if(enemyskill===1){
      enemystatistics.unitsleftE = 100;
      var levelE = document.getElementById("enemylevel");
      levelE.innerHTML = "Rookie";
      document.getElementById("enemyhealthstat").innerHTMl = enemystatistics.unitsleftE;
    }
    else if(enemyskill===2){
      enemystatistics.unitsleftE = 250;
      var levelE = document.getElementById("enemylevel");
      levelE.innerHTML = "Amateur";
      document.getElementById("enemyhealthstat").innerHTMl = enemystatistics.unitsleftE;
    }
    else if(enemyskill===3){
      enemystatistics.unitsleftE = 500;
      var levelE = document.getElementById("enemylevel");
      levelE.innerHTML = "Pro";
      document.getElementById("enemyhealthstat").innerHTMl = enemystatistics.unitsleftE;
    }
  }

  //Work on randomizing enemies//