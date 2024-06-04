var an=[""]
var nam=[""]
function bob3(){
    //reviews
    if(localStorage.getItem("1")!=null){
        let an2=localStorage.getItem("1")
        an=JSON.parse(an2)
    }
    let x= document.forms["bob1"]["bob2"].value
    an.push(x)
    let an1=JSON.stringify(an)
    localStorage.setItem("1", an1)
    an2=localStorage.getItem("1")
    let an3=JSON.parse(an2)
    //usernames
    if(localStorage.getItem("2")!=null){
        let nam2=localStorage.getItem("2")
        nam=JSON.parse(nam2)
    }
    let y= document.forms["bob1"]["bob5"].value
    nam.push(y)
    let nam1=JSON.stringify(nam)
    localStorage.setItem("2", nam1)
    nam2=localStorage.getItem("2")
    let nam3=JSON.parse(nam2)
    bob6()
}
function bob6(){
    let ah=localStorage.getItem("1")
    let ah2=localStorage.getItem("2")
    let ah3=JSON.parse(ah2)
    let ah1=JSON.parse(ah)
    for(var i=1; i<ah1.length; i++){
        let bdiv=document.getElementById("bob")
        let ndiv=document.createElement("div")
        let nhr=document.createElement("hr")
        let np=document.createElement("p")
        let nsp=document.createElement("span")
        let nsph2=document.createElement("span")
        let nh2=document.createElement("h2")
        let a=i+8
        if(i%2==0){
            let rdiv=document.createElement("div")
            bdiv.appendChild(rdiv)
            rdiv.appendChild(ndiv)
            ndiv.appendChild(nh2)
            ndiv.appendChild(nhr)
            ndiv.appendChild(np)
            np.appendChild(nsp)
            nh2.innerHTML="Review "+a+": "+ah1[i]
            nsp.innerHTML=ah3[i]
            ndiv.classList.add("col-6","divbg", "adivsp")
            nh2.classList.add("ah", "jersey-10-regular")
        }
        else{
            bdiv.appendChild(ndiv)
            ndiv.appendChild(nh2)
            ndiv.appendChild(nhr)
            ndiv.appendChild(np)
            np.appendChild(nsp)
            nh2.innerHTML="Review "+a+": "+ah1[i]
            nsp.innerHTML=ah3[i]
            ndiv.classList.add("col-6","divbg", "adivsp")
            nh2.classList.add("ah", "jersey-10-regular")
        }
    }
}
function bob7(){
    localStorage.clear();
}