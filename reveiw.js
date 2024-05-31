var allu=[""]
var allr=[""]
var un=prompt("What is your user Name")
function review(){
    if(un!="bob"){
        //Reveiws
        let allr2=localStorage.getItem("3")
        allr=JSON.parse(allr2)
        let x = document.forms["form2"]["form1"].value;
        allr.push(x)
        let allr1= JSON.stringify(allr)
        localStorage.setItem("3", allr1)
        allr2=localStorage.getItem("3")
        let allr3=JSON.parse(allr2)
    }
    else(
        alert("You can't write more than one review with that user name")
    )
    document.getElementById("o").hidden=true

}

function tf(){
    document.getElementById("o").hidden=false
    document.getElementById("q").hidden=true
}
function tfn(){
    document.getElementById("o").hidden=true
    document.getElementById("q").hidden=true
}
//not funcitonal
function usernamest(){
    let allu2=localStorage.getItem("4")
    allu=JSON.parse(allu2)
    allu.push(un)
    let allu1= JSON.stringify(allu)
    localStorage.setItem("4", allu1)
    allu2=localStorage.getItem("4")
    let allu3=JSON.parse(allu2)
    alert(allu3)
    alert("bob")
}

usernamest()