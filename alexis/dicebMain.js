//EARLY DEVELOPMENT BELOW//
//Enemy statistics
var enemystatistics = {
  unitsleftE:200,
  disasterluck:500,
  disastergoodluck:1000,
  presgoodluck:1,
  presbadluck:1,
}
//Player statistics as they play the game
var statistics = {
  wins:0,
  losses:0,
  draws:0,
  population:0,
  manpower:0,
  unitsleft:0,
  totalbattles:0,
  soldiersKilled:0,
  warswon:0, 
  morale:100,
  maxmorale:100,
  goodluck:500,
  badluck:1,
  luckstage:0,

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
  warclaim:function(){
    this.warswon = this.warswon+1;
    var warswon = document.getElementById("warswon");
    warswon.innerHTML = this.warswon;
  },
  battlecount:function(){
    this.totalbattles=this.totalbattles+1;
    var battletot = document.getElementById("totalbattles");
    battletot.innerHTML = this.totalbattles;
  },
  countrypop:function(){
    this.population = 4*this.manpower-(this.manpower-this.unitsleft);
    document.getElementById("population").innerHTML = this.population;
  },
  unit:function(life){
    this.unitsleft = life;
    this.manpower = life;
    this.population = life * 4;
    var manpower = document.getElementById("maxhealthstat");
    manpower.innerHTML = this.manpower;
    var healthofuser = document.getElementById("healthstat");
    healthofuser.innerHTML = this.unitsleft;
    var population = document.getElementById("population");
    population.innerHTML = this.population;
  },
  determinecombat:function(result,enemyresult){
    enemystatistics.unitsleftE = enemystatistics.unitsleftE - enemyresult;
    this.unitsleft = this.unitsleft - result;
    if(result>enemyresult){
      var leftover = result-enemyresult;
      this.unitsleft = this.unitsleft + leftover;
    }
    else if(result<enemyresult){
      var enemyleftover = enemyresult-result;
      enemystatistics.unitsleftE = enemystatistics.unitsleftE + enemyleftover;
    }
    else{
      enemystatistics.unitsleftE = enemystatistics.unitsleftE-enemyresult;
      this.unitsleft = this.unitsleft-result;
    }
    document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
    document.getElementById("healthstat").innerHTML = this.unitsleft;
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
  moralemeter:function(battleStatus){
    if(battleStatus==="WIN"){
      if(this.morale>=this.maxmorale-5){
        this.morale = this.maxmorale;
      }
      else{
        this.morale=this.morale+5
      }
    }
    else if(battleStatus==="LOSS"){
      this.morale = this.morale-5;
    }
    else{
      if(this.morale<=3){
        this.morale=0;
        gameOver();
      }
      else{
        this.morale = this.morale-2;
      }
    }
    var moraleStat = document.getElementById("peoplemot");
    moraleStat.innerHTML = this.morale;
  },
  injuredmoralemeter:function(battleStatus){
    if(battleStatus==="WIN"){
      this.morale=this.morale+10;
    }
    else{
      if(this.morale<=10){
        this.morale=0;
        gameOver();
      }
      else{
        this.morale=this.morale-10;
      }
    }
    var moraleStat = document.getElementById("peoplemot");
    moraleStat.innerHTML = this.morale;
  },
  aftermathmorale:function(){
    if(document.getElementById("enemylevel").innerHTML==="Rookie"){
      if(this.maxmorale<this.morale+10){
        this.morale = this.maxmorale;
      }
      else{
        this.morale = this.morale + 10;
      }
    }
    else if (document.getElementById("enemylevel").innerHTML==="Amateur"){
      if(this.maxmorale<this.morale+20){
        this.morale = this.maxmorale;
      }
      else{
        this.morale = this.morale + 20;
      }
    }
    else if(document.getElementById("enemylevel").innerHTML==="Pro"){
      if(this.maxmorale<this.morale+50){
        this.morale = this.maxmorale;
      }
      else{
        this.morale = this.morale + 50;
      }
    }
    else{
      if(this.maxmorale<this.morale+100){
        this.morale = this.maxmorale;
      }
      else{
        this.morale = this.morale + 100;
      }
    }
    document.getElementById("peoplemot").innerHTML = this.morale;
  }
}
//EARLY DEVELOPMENT ABOVE//
  //Used to set the level of the Enemy
  var enemylevel = [1,2,3,4];
  function enemiesCreate(){
    let enemyskill = Math.round(Math.random() * 10);
    randomizeEncounter(enemyskill);
  }
  //Used to determine the reward after every 10 rounds
  var randomReward1 = ["Tier 1","Tier 2","Tier 3"]
  var randomReward2 = ["Tier 1","Tier 2","Tier 3"]
  var randomReward3 = ["Tier 1","Tier 2","Tier 3"]
  function rewardCreate(){
    let reward1 = Math.round(Math.random()*10);
    let reward2 = Math.round(Math.random()*10);
    let reward3 = Math.round(Math.random()*10);
    let inReward1 = randomizeReward1(reward1);
    let inReward2 = randomizeReward2(reward2);
    let inReward3 = randomizeReward3(reward3);
    beginRewardPanels(inReward1,inReward2,inReward3);
  }


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
  var selectone = document.getElementById('op1');
  var selecttwo = document.getElementById('op2');
  var selectthree = document.getElementById('op3');

  button.onclick = function() {
    //Determines the image presented based on the roll//
    var result = dice.roll();
    var enemyresult = dice.roll();

    //Determines the image presented based on the roll (FOR THE USER)//
    if (result===1){
      var dierolled = "media/dice-1.jpg";
    }
    else if (result===2){
      var dierolled = "media/dice-2.jpg";
    }
    else if (result===3){
      var dierolled = "media/dice-3.jpg";
    }
    else if (result===4){
      var dierolled = "media/dice-4.jpg";
    }
    else if (result===5){
      var dierolled = "media/dice-5.jpg";
    }
    else if (result===6){
      var dierolled = "media/dice-6.jpg";
    }

    //Determines the image presented based on the roll (FOR THE ENEMY)//
      if (enemyresult===1){
        var enemydierolled = "media/dice-1.jpg";
      }
      else if (enemyresult===2){
        var enemydierolled = "media/dice-2.jpg";
      }
      else if (enemyresult===3){
        var enemydierolled = "media/dice-3.jpg";
      }
      else if (enemyresult===4){
        var enemydierolled = "media/dice-4.jpg";
      }
      else if (enemyresult===5){
        var enemydierolled = "media/dice-5.jpg";
      }
      else if (enemyresult===6){
        var enemydierolled = "media/dice-6.jpg";
      }
    //The if statement that allows the user to continue fighting
    function determineEnd(result){
      if (statistics.unitsleft<6){
        alert("You've lost the war...");
        gameOver();
      }
      else if(enemystatistics.unitsleftE<6){
        alert("Congratulations, you've won the war!");
        statistics.warclaim();
        statistics.aftermathmorale();
        enemiesCreate();
        breakEvent();
      }
      else if(statistics.unitsleft<6 && enemystatistics.unitsleftE<6){
        alert("This war was a draw!");
      }
      else{
        changeImg(dierolled,enemydierolled);
        printNumber(result,enemyresult);
        statistics.battlecount();
        statistics.determinecombat(result,enemyresult);
        seeWinner(result,enemyresult);
        battleColor(result,enemyresult);
        statistics.tallydeath(result,enemyresult);
        statistics.countrypop();
        battleEvents();
        ultimateBattleEvents();
        breakEvent();
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
      statistics.moralemeter(winner.innerHTML);
    }
    else if (result>enemyresult){
      var winner = document.getElementById('resultofwinner');
      winner.innerHTML = "WIN";
      winner.style.color = ('green');
      basicUpdateStat(winner.innerHTML);
      if(statistics.morale<=50){
        statistics.injuredmoralemeter(winner.innerHTML);
      }
      else{
        statistics.moralemeter(winner.innerHTML);
      }
    }
    else if (result<enemyresult){
      var winner = document.getElementById('resultofwinner');
      winner.innerHTML = "LOSS";
      winner.style.color = ('red');
      basicUpdateStat(winner.innerHTML);
      if(statistics.morale<=50){
        statistics.injuredmoralemeter(winner.innerHTML);
      }
      else{
        statistics.moralemeter(winner.innerHTML);
      }
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
   //Attempt to make it so the user can only input integer values//
   document.addEventListener("onload",customPrompt());
   function customPrompt(completedOnce){
    let totalUnits = parseInt(prompt("How many units would you like to have?"));
    statistics.unit(totalUnits);
    if (completedOnce === "true"){
      enemiesCreate()
    }
    else{
      let username1 = prompt("What will be your leader's name?");
      let username2 = username1;
      document.getElementById("usersnameone").innerHTML= username1;
      document.getElementById("usersnametwo").innerHTML = username2;
      enemiesCreate();
    }
   }
  //Allows for the restarting of the game
  var restart = document.getElementById("restart");

  restart.onclick = function(){
    document.getElementById("winsstat").innerHTML = statistics.wins = 0;
    document.getElementById("lossesstat").innerHTML = statistics.losses = 0;
    document.getElementById("drawsstat").innerHTML = statistics.draws = 0;
    document.getElementById("healthstat").innerHTML = statistics.unitsleft = 0;
    document.getElementById("totalbattles").innerHTML = statistics.totalbattles = 0;
    document.getElementById("soldiersKstat").innerHTML = statistics.soldiersKilled = 0;
    document.getElementById("peoplemot").innerHTML = statistics.morale = 100;
    document.getElementById("maxpeoplemot").innerHTML = statistics.maxmorale = 100;
    document.getElementById("countryluck").innerHTML = statistics.luckstage = 0;
    document.getElementById("warswon").innerHTML = statistics.warswon = 0;
    document.getElementById("population").innerHTML = statistics.population = 0;
    enemystatistics.disastergoodluck = 1000;
    enemystatistics.presgoodluck = 1;
    statistics.goodluck = 500;
    statistics.badluck = 1;
    document.getElementById("roll").removeAttribute("hidden");
    document.getElementById("user").innerHTML = "";
    document.getElementById("enemy").innerHTML = "";
    document.getElementById("resultofwinner").innerHTML = "";
    document.querySelector("#userimg").setAttribute("src","media/questionmark.jpg");
    document.querySelector("#enemyimg").setAttribute("src","media/questionmark.jpg");
    var completedOnce = "true";
    customPrompt(completedOnce);
  }
  //FIND A SIMPLER WAY TO DO THIS ABOVE//
  function randomizeEncounter(enemyskill){
    if (enemyskill>0 && enemyskill<5){
      enemyskill = enemylevel[0];
      setEnemyStats(enemyskill);
    }
    else if(enemyskill>=5 && enemyskill<8){
      enemyskill = enemylevel[1];
      setEnemyStats(enemyskill);
    }
    else if(enemyskill==8 || enemyskill==9){
      enemyskill = enemylevel[2];
      setEnemyStats(enemyskill);
    }
    else{
      enemyskill=enemylevel[3];
      setEnemyStats(enemyskill);
    }
  }
  //Gives difficulty of enemy and sets units before battle
  function setEnemyStats(enemyskill){
    if(enemyskill===1){
      enemystatistics.unitsleftE = 100;
      document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
      var levelE = document.getElementById("enemylevel");
      levelE.innerHTML = "Rookie";
    }
    else if(enemyskill===2){
      enemystatistics.unitsleftE = 250;
      document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
      var levelE = document.getElementById("enemylevel");
      levelE.innerHTML = "Amateur";
    }
    else if(enemyskill===3){
      enemystatistics.unitsleftE = 500;
      document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
      var levelE = document.getElementById("enemylevel");
      levelE.innerHTML = "Pro";
    }
    else{
      enemystatistics.unitsleftE = 1000;
      document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
      var levelE = document.getElementById("enemylevel");
      levelE.innerHTML = "BOSS";
    }

  }
  //Sets values to an event for div 1//CURRENT
  function randomizeReward1(reward1){
    if (reward1>0 && reward1<7){
      return randomReward1[0];
    }
    else if (reward1>=7 && reward1<10){
      return randomReward1[1];
    }
    else{
      return randomReward1[2];
    }
  }
  //Sets values to an event for div 2
  function randomizeReward2(reward2){
    if (reward2>0 && reward2<7){
      return randomReward2[0];
    }
    else if (reward2>=7 && reward2<10){
      return randomReward2[1];
    }
    else{
      return randomReward2[2];
    }
  }
  //Sets values for an event for div 3
  function randomizeReward3(reward3){
    if (reward3>0 && reward3<7){
      return randomReward3[0];
    }
    else if (reward3>=7 && reward3<10){
      return randomReward3[1];
    }
    else{
      return randomReward3[2];
    }
  }
  //Used to make the pop ups visible for the user to make their choice
  function beginRewardPanels(inReward1,inReward2,inReward3){
    document.getElementById("roll").setAttribute("hidden","hidden");
    document.getElementById("restart").setAttribute("hidden", "hidden");

    var divFind1 = document.getElementById("pop-up1");
    var divFind2 = document.getElementById("pop-up2");
    var divFind3 = document.getElementById("pop-up3");

    document.getElementById("pop1place").innerHTML = inReward1;
    document.getElementById("pop2place").innerHTML = inReward2;
    document.getElementById("pop3place").innerHTML = inReward3;

    divFind1.removeAttribute("hidden");
    divFind2.removeAttribute("hidden");
    divFind3.removeAttribute("hidden");
  }
  //Once the user selects one of the buttons, the change goes into effect and they disappear
  selectone.onclick = function(){
    var ev1 = document.getElementById("pop1place").innerHTML;
    if (ev1==="Tier 1"){
      statistics.maxmorale = statistics.maxmorale+10;
      statistics.morale = statistics.morale+10;
      document.getElementById("peoplemot").innerHTML = statistics.morale;
      document.getElementById("maxpeoplemot").innerHTML = statistics.maxmorale;
    }
    else if(ev1==="Tier 2"){
      statistics.maxmorale = statistics.maxmorale+25;
      statistics.morale = statistics.morale+25;
      document.getElementById("peoplemot").innerHTML = statistics.morale;
      document.getElementById("maxpeoplemot").innerHTML = statistics.maxmorale;
    }
    else{
      statistics.maxmorale = statistics.maxmorale+50;
      statistics.morale = statistics.morale+50;
      document.getElementById("peoplemot").innerHTML = statistics.morale;
      document.getElementById("maxpeoplemot").innerHTML = statistics.maxmorale;
    }
    document.getElementById("pop-up1").setAttribute("hidden", "hidden");
    document.getElementById("pop-up2").setAttribute("hidden", "hidden");
    document.getElementById("pop-up3").setAttribute("hidden", "hidden");

    document.getElementById("roll").removeAttribute("hidden");
    document.getElementById("restart").removeAttribute("hidden");
  }
  selecttwo.onclick = function(){
    var ev2 = document.getElementById("pop2place").innerHTML;
    if(ev2==="Tier 1"){
      statistics.manpower = statistics.manpower+100;
      statistics.unitsleft = statistics.unitsleft+50;
      document.getElementById("maxhealthstat").innerHTML = statistics.manpower;
      document.getElementById("healthstat").innerHTML = statistics.unitsleft;
      statistics.countrypop();
      document.getElementById("population").innerHTML = statistics.population;
    }
    else if(ev2==="Tier 2"){
      statistics.manpower = statistics.manpower+250;
      statistics.unitsleft = statistics.unitsleft+125;
      document.getElementById("maxhealthstat").innerHTML = statistics.manpower;
      document.getElementById("healthstat").innerHTML = statistics.unitsleft;
      statistics.countrypop();
      document.getElementById("population").innerHTML = statistics.population;
    }
    else{
      statistics.manpower = statistics.manpower+500;
      statistics.unitsleft = statistics.unitsleft+250;
      document.getElementById("maxhealthstat").innerHTML = statistics.manpower;
      document.getElementById("healthstat").innerHTML = statistics.unitsleft;
      statistics.countrypop();
      document.getElementById("population").innerHTML = statistics.population;
    }
    document.getElementById("pop-up1").setAttribute("hidden", "hidden");
    document.getElementById("pop-up2").setAttribute("hidden", "hidden");
    document.getElementById("pop-up3").setAttribute("hidden", "hidden");

    document.getElementById("roll").removeAttribute("hidden");
    document.getElementById("restart").removeAttribute("hidden");
  }
  selectthree.onclick = function(){
    var ev3 = document.getElementById("pop3place").innerHTML;
    if(ev3==="Tier 1"){
      statistics.goodluck = statistics.goodluck-1;
      statistics.badluck = statistics.badluck+1;
      statistics.luckstage = statistics.luckstage+1;
      enemystatistics.presgoodluck = enemystatistics.presgoodluck+1;
      enemystatistics.disastergoodluck = enemystatistics.disastergoodluck-1;
      document.getElementById("countryluck").innerHTML = statistics.luckstage;
    }
    else if(ev3==="Tier 2"){
      statistics.goodluck = statistics.goodluck-2;
      statistics.badluck = statistics.badluck+2;
      statistics.luckstage = statistics.luckstage+2;
      enemystatistics.presgoodluck = enemystatistics.presgoodluck+2;
      enemystatistics.disastergoodluck = enemystatistics.disastergoodluck-2;
      document.getElementById("countryluck").innerHTML = statistics.luckstage;
    }
    else{
      statistics.goodluck = statistics.goodluck-3;
      statistics.badluck = statistics.badluck+3;
      statistics.luckstage = statistics.luckstage+3;
      enemystatistics.presgoodluck = enemystatistics.presgoodluck+3;
      enemystatistics.disastergoodluck = enemystatistics.disastergoodluck-3;
      document.getElementById("countryluck").innerHTML = statistics.luckstage;
    }
    document.getElementById("pop-up1").setAttribute("hidden", "hidden");
    document.getElementById("pop-up2").setAttribute("hidden", "hidden");
    document.getElementById("pop-up3").setAttribute("hidden", "hidden");

    document.getElementById("roll").removeAttribute("hidden");
    document.getElementById("restart").removeAttribute("hidden");
  }
  
 //These are random events that can occur when the button is clicked.
  function battleEvents(){
    var userEventChance = Math.round(Math.random()*500);
    var enemyEventChance = Math.round(Math.random()*500);
    exEvent(userEventChance,enemyEventChance);
  }
  function ultimateBattleEvents(){
    var ultUEC = Math.round(Math.random()*1000);
    var ultEEC = Math.round(Math.random()*1000);
    ultimateExEvent(ultUEC, ultEEC);
    //ultimateExEvent2(ultUEC2,ultEEC2);//WORK ON
  }
  function exEvent(userEC,enemyEC){
    if(userEC >= statistics.goodluck){
      alert("Your Country Has Drafted More Units!");
      if(statistics.unitsleft+100>=statistics.manpower){
        statistics.unitsleft = statistics.manpower;
      }
      else{
        statistics.unitsleft = statistics.unitsleft+100;
      }
      document.getElementById("healthstat").innerHTML = statistics.unitsleft;
    }
    else if (enemyEC===250){
      alert("Your Enemy's Country Has Drafted More Units!");
      enemystatistics.unitsleftE = enemystatistics.unitsleftE+100;
      document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
    }
    //FIX THIS CODE
    else if (userEC===1){
      alert("Your Country Is Tired of The War!");
      statistics.unitsleft = statistics.unitsleft-100;
      if(statistics.unitsleft<=100){
        statistics.unitsleft = 0;
      }
      else{}
      document.getElementById("healthstat").innerHTML = statistics.unitsleft;
    }
    else if(enemyEC <= statistics.badluck){
      alert("Your Enemy's Country Is Tired of The War!");
      enemystatistics.unitsleftE = enemystatistics.unitsleftE-100;
      if(enemystatistics.unitsleftE<=100){
        enemystatistics.unitsleftE = 0;
      }
      else{}
      document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
    }
    else{}
  }
  function ultimateExEvent(ultUEC,ultEEC){
    if (ultUEC <= enemystatistics.presgoodluck){
      alert("Your President Has Given a Motivating Speech!");
      if( Math.floor(statistics.unitsleft*1.5) >= statistics.manpower){
        statistics.unitsleft = statistics.manpower;
      }
      else{
        statistics.unitsleft = Math.round(statistics.unitsleft*1.5);
        statistics.morale = statistics.maxmorale;
      }
      document.getElementById("healthstat").innerHTML = statistics.unitsleft;
      document.getElementById("peoplemot").innerHTML = statistics.morale;

    }
    else if(ultEEC === 1){
      alert("Their President Has Given a Motivating Speech!");
      enemystatistics.unitsleftE = Math.round(statistics.unitsleft*1.5);
      document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
    }
    else if(ultUEC >= enemystatistics.disastergoodluck){
      alert("Their President Has Been Assasinated!");
      enemystatistics.unitsleftE = Math.round(enemystatistics.unitsleftE/2);
      document.getElementById("enemyhealthstat").innerHTML = enemystatistics.unitsleftE;
    }
    else if(ultEEC === 500){
      alert("Your President Has Been Assasinated!");
      statistics.unitsleft = Math.round(statistics.unitsleft/2);
      document.getElementById("healthstat").innerHTML = statistics.unitsleft;
    }
  }
  //function ultimateExEvent2(ultUEC2,ultEEC2){
  //WORK ON MAYBE
  //}
  function breakEvent(){
    if(statistics.totalbattles%50===0){ //Determine later to find balanced game
      alert("Choose your reward!");
      rewardCreate();
    }
    else{}
  }
  function gameOver(){
    alert("Your time as a Military Leader Has Come to an End!");
    document.getElementById("roll").setAttribute("hidden","hidden");
  }
  //Economy to buy units? - TBD //
  //Random events that could on a click? - Somewhat worked on//
  //CURRENT to find the most current thing worked on
  //Below are the last components needed
    //SOON WORK ON MAX LEVELS TO THE UPGRADES
    //Once all finish, show a message saying "Congratulations, everything from here on is up to you!"
    //Implement Natural Disaster Luck //DONE --- Add Population/Max Units (So manpower sort of makes more sense)
    //On upgrades, double manpower things and halve the amount of units gained (you'll know what I mean)
    //Somtimes rewards occur twice, fix that
    //Add autoclicker
    //Change Alerts to divs
    //Design
    //Menu Screen (FINAL)
  //Above are the last components needed