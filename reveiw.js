var an=[]
var nam=[]
var gam=[]
var gb=[]
var par=[]
function bob3(){
    //reviews
    if(localStorage.getItem("1")!=null){
        let an2=localStorage.getItem("1")
        an=JSON.parse(an2)
        let x= document.forms["bob1"]["bob2"].value
        an.push(x)
        let an1=JSON.stringify(an)
        localStorage.setItem("1", an1)
        an2=localStorage.getItem("1")
        let an3=JSON.parse(an2)
    }
    else{
        let x= document.forms["bob1"]["bob2"].value
        an[0]=x
        let an1=JSON.stringify(an)
        localStorage.setItem("1", an1)
        an2=localStorage.getItem("1")
        let an3=JSON.parse(an2)
    }
    //usernames
    if(localStorage.getItem("2")!=null){
        let nam2=localStorage.getItem("2")
        nam=JSON.parse(nam2)
        let y= document.forms["bob1"]["bob5"].value
        nam.push(y)
        let nam1=JSON.stringify(nam)
        localStorage.setItem("2", nam1)
        nam2=localStorage.getItem("2")
        let nam3=JSON.parse(nam2)
    }

    else{
        let y= document.forms["bob1"]["bob5"].value
        nam[0]=y
        let nam1=JSON.stringify(nam)
        localStorage.setItem("2", nam1)
        let nam2=localStorage.getItem("2")
        let nam3=JSON.parse(nam2)
    }
    //game
    if(localStorage.getItem("3")!=null){
        let gam2=localStorage.getItem("3")
        gam=JSON.parse(gam2)
        let z= document.forms["bob1"]["bob8"].value
        gam.push(z)
        let gam1=JSON.stringify(gam)
        localStorage.setItem("3", gam1)
        gam2=localStorage.getItem("3")
    }
    else{
        let z= document.forms["bob1"]["bob8"].value
        an[0]=z
        let gam1=JSON.stringify(gam)
        localStorage.setItem("3", gam1)
        let gam2=localStorage.getItem("3")
        let gam3=JSON.parse(gam2)
    }
    if(localStorage.getItem("4")!=null){
        let gb2=localStorage.getItem("4")
        gb=JSON.parse(gb2)
        let w= document.forms["bob1"]["good"].value
        alert(w)
        gb.push(w)
        let gb1=JSON.stringify(gb)
        localStorage.setItem("4", gb1)
        gb2=localStorage.getItem("4")
        let gb3=JSON.parse(gb2)
    }
    else{
        let w= document.forms["bob1"]["good"].value
        alert(w)
        an[0]=w
        let gb1=JSON.stringify(gb)
        localStorage.setItem("4", gb1)
        gb2=localStorage.getItem("4")
        let gb3=JSON.parse(gb2)
    }
}
//The heading things
function bob6(){
    let ah=localStorage.getItem("1")
    let ah2=localStorage.getItem("2")
    let ah3=JSON.parse(ah2)
    let ah1=JSON.parse(ah)
    for(var i=0; i<ah1.length; i++){
        let bdiv=document.getElementById("bob")
        let ndiv=document.createElement("div")
        let nhr=document.createElement("hr")
        let np=document.createElement("p")
        let nsp=document.createElement("span")
        let nsp2=document.createElement("span")
        let nhr2=document.createElement("hr")
        let np2=document.createElement("p")
        let nh2=document.createElement("h2")
        let nh22=document.createElement("h2")
        let rdiv=document.createElement("div")
        let ndiv2=document.createElement("div")
        let a=i+9
        let b=i+1
        let c=a+1
        if(i%2==0){
            bdiv.appendChild(rdiv)
            rdiv.appendChild(ndiv)
            rdiv.appendChild(ndiv2)
            ndiv.appendChild(nh2)
            ndiv.appendChild(nhr)
            ndiv.appendChild(np)
            np.appendChild(nsp)
            ndiv2.appendChild(nh22)
            ndiv2.appendChild(nhr2)
            ndiv2.appendChild(np2)
            np2.appendChild(nsp2)
            nh2.innerHTML="Review "+a+": "+ah1[i]
            nsp.innerHTML=ah3[i]
            nh22.innerHTML="Review "+c+": "+ah1[b]
            nsp2.innerHTML=ah3[b]
            rdiv.classList.add("row")
            ndiv.classList.add("col-6","divbg", "adivsp")
            nh2.classList.add("ah", "jersey-10-regular")
            ndiv2.classList.add("col-6","divbg", "adivsp")
            nh22.classList.add("ah", "jersey-10-regular")
        }
    }
    bob7()
}
//The table
function bob7(){
    let ah=localStorage.getItem("1")
    let ah2=localStorage.getItem("4")
    let ah4=localStorage.getItem("3")
    let ah3=JSON.parse(ah2)
    let ah1=JSON.parse(ah)
    let ah5=JSON.parse(ah4)
    for(var i=0; i<ah1.length; i++){
        let tab=document.getElementById("bobstable");
        let no=document.getElementById("rowsp");
        let ntr1=document.createElement("tr");
        let nth=document.createElement("th");
        let td1=documnet.createElement("td");
        alert("Bob");
        let td2=documnet.createElement("td");
        let td3=documnet.createElement("td");
        let td4=documnet.createElement("td");
        let a=i+8
        no.setAttribute("rowspan", a)
        tab.appendChild(ntr1)
        ntr1.appendChild(nth)
        ntr1.appendChild(td1)
        ntr1.appendChild(td2)
        ntr1.appendChild(td3)
        ntr1.appendChild(td4)
        if(ah3[i]==="bad"){
            let d="Yes"
            let f="No"
        }
        else{
            let d="No"
            let f="Yes"
        }
        nth.innerHTML="Review "+a
        td1.innerHTML=ah1[i]
        td2.innerHTML=ah5[i]
        td3.innerHTML=f
        td4.innerHTML=d
        td4.setAttribute("colspan", "2")
    }
}
function bob8(){
    localStorage.clear();
}