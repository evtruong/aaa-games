let x;

document.getElementById("rollDie").onclick = function skibidi(){

    x = Math.floor(Math.random() * 20) + 1;

    document.getElementById("num").innerHTML = x;
}

skibidi();