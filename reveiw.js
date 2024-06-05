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
        let gam3=JSON.parse(gam2)
    }
    else{
        let z= document.forms["bob1"]["bob8"].value
        gam[0]=z
        let gam1=JSON.stringify(gam)
        localStorage.setItem("3", gam1)
        let gam2=localStorage.getItem("3")
        let gam3=JSON.parse(gam2)
    }
    //good/bad
    if(localStorage.getItem("4")!=null){
        let gb2=localStorage.getItem("4")
        gb=JSON.parse(gb2)
        let w= document.forms["bob1"]["good"].value
        gb.push(w)
        let gb1=JSON.stringify(gb)
        localStorage.setItem("4", gb1)
        gb2=localStorage.getItem("4")
        let gb3=JSON.parse(gb2)
    }
    else{
        let w= document.forms["bob1"]["good"].value
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
    let ah2=localStorage.getItem("3")
    let ah3=localStorage.getItem("4")
    let ah4=JSON.parse(ah)
    let ah5=JSON.parse(ah2)
    let ah6=JSON.parse(ah3)
    var table= document.getElementById("bobstabe")
    for(var i=0; i<ah4.length; i++){
        var f=""
        var d=""
        var e=i+9
        var h=i+1
        var j=i-1
        var tr1=table.insertRow(h)
        var cell1 = tr1.insertCell(0);
        var cell2 = tr1.insertCell(1);
        var cell3=tr1.insertCell(2)
        var cell4=tr1.insertCell(3)
        var cell5=tr1.insertCell(4)
        cell1.innerHTML = "Review " +e;
        cell2.innerHTML = ah4[i];
        cell3.innerHTML=ah5[i]
        cell5.setAttribute("colspan", "2")
        cell1.setAttribute("class", "form2 jersey-10-regular")
        cell2.setAttribute("class", "form3 jacquard-12-regular")
        cell3.setAttribute("class", "form3 jacquard-12-regular")
        cell4.setAttribute("class", "form3 jacquard-12-regular")
        cell5.setAttribute("class", "form3 jacquard-12-regular")
        if(ah6[i]=="good"){
            f="Yes"
            d="No"
        }
        else{
            f="No"
            d="Yes"
        }
        cell4.innerHTML=f
        cell5.innerHTML=d
        if(i===0){
            var cell6=tr1.insertCell(5)
            cell6.innerHTML="No"
            cell6.setAttribute("rowspan", i)
            cell6.setAttribute("class", "form3 jacquard-12-regular")
        }
    }        
}
function bob9(){
    localStorage.clear();
}