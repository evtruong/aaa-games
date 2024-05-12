let x;

document.getElementById("rollDie").onclick = function(){

    x = Math.floor(Math.random() * 20) + 1;

    document.getElementById("xlabel").innerHTML = x;
}