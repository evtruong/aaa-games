
var name=prompt("What would your user name be?")
document.getElementById("name1").innerHTML = name;
//main section//
var oc=false
var to="on"
var rice=0
var totalrice=[]
var allinall=0
var weigh=0
var buttonword="o"
var total=0
var b=0
var increase=0
var imgElement= document.querySelector("#cu");
var plucking= {
    number:1,
    price:15,
    //1/10 of a second interval it equals 0.01  1 second equals 0.1
    production:0.01,
    produced:0,
    pro: 0,
    pro1: 0,
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro1=this.pro1-this.price
            document.getElementById("bought1").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price1").textContent=this.price
            }
            else{
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price1").textContent=this.price
            }
            rice=this.pro1
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0 && oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
            this.pro=(Math.round(100*(rice+this.produced)))/100
            rice=this.pro
            if(this.pro<0){
                    this.pro=0
            }
            document.getElementById("product1").innerHTML=this.pro2
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").innerHTML=rice
        }
        }
}    
var planting= {
    number:0,
    price:100,
    //0.1 per 1/10 second 1 persecond 
    production: 0.1,
    produced:10,
    pro:0,
    pro1:0,    
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro1-this.price
            document.getElementById("amount").textContent=this.pro
            document.getElementById("bought2").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price2").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price2").textContent=this.price
            }
            rice=this.pro
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
                this.pro=(Math.round(100*(rice+this.produced)))/100
                rice=this.pro
                if(this.pro<0){
                    this.pro=0
                }
                document.getElementById("product2").innerHTML=this.pro2
                rice=(Math.round(100*rice))/100
                document.getElementById("amount").innerHTML=rice
            }
        }
}
var farming= {
    number:0,
    price:1100,
    production: 1,
    produced:0,
    pro:0,
    pro1:0,
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro1-this.price
            document.getElementById("amount").textContent=this.pro
            document.getElementById("bought3").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price3").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price3").textContent=this.price
            }
            rice=this.pro
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
                this.pro=(Math.round(100*(rice+this.produced)))/100
                rice=this.pro
                if(this.pro<0){
                    this.pro=0
                }
                document.getElementById("product3").innerHTML=this.pro2
                rice=(Math.round(100*rice))/100
                document.getElementById("amount").innerHTML=rice
            }
        }
}
var factory= {
    number:0,
    price:12000,
    production: 10,
    produced:0,
    pro:0,
    pro1:0,
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro1-this.price
            document.getElementById("amount").textContent=this.pro
            document.getElementById("bought4").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price4").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price4").textContent=this.price
            }
            rice=this.pro
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
                this.pro=(Math.round(100*(rice+this.produced)))/100
                rice=this.pro
                if(this.pro<0){
                    this.pro=0
                }
                document.getElementById("product4").innerHTML=this.pro2
                rice=(Math.round(100*rice))/100
                document.getElementById("amount").innerHTML=rice
            }
        }    
}
var printing= {
    number:0,
    price:130000,
    production: 100,
    produced:0,
    pro:0,
    pro1:0,
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro1-this.price
            document.getElementById("amount").textContent=this.pro
            document.getElementById("bought5").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price5").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price5").textContent=this.price
            }
            rice=this.pro
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
                this.pro=(Math.round(100*(rice+this.produced)))/100
                rice=this.pro
                if(this.pro<0){
                    this.pro=0
                }
                document.getElementById("product5").innerHTML=this.pro2
                rice=(Math.round(100*rice))/100
                document.getElementById("amount").innerHTML=rice
            }
        }
}
var ritual= {
    number:0,
    price:1400000,
    production: 1000,
    produced:0,
    pro:0,
    pro1:0,
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro1-this.price
            document.getElementById("amount").textContent=this.pro
            document.getElementById("bought6").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price6").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("pricet6").textContent=this.price
            }
            rice=this.pro
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
                this.pro=(Math.round(100*(rice+this.produced)))/100
                rice=this.pro
                if(this.pro<0){
                    this.pro=0
                }
                document.getElementById("product6").innerHTML=this.pro2
                rice=(Math.round(100*rice))/100
                document.getElementById("amount").innerHTML=rice
            }
        }
}
var spells= {
    number:0,
    price:15000000,
    production: 10000,
    produced:0,
    pro:0,
    pro1:0,
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro1-this.price
            document.getElementById("amount").textContent=this.pro
            document.getElementById("bought7").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price7").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price7").textContent=this.price
            }
            rice=this.pro
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
                this.pro=(Math.round(100*(rice+this.produced)))/100
                rice=this.pro
                if(this.pro<0){
                    this.pro=0
                }
                document.getElementById("product7").innerHTML=this.pro2
                rice=(Math.round(100*rice))/100
                document.getElementById("amount").innerHTML=rice
            }
        }
}
var chemistry= {
    number:0,
    price:160000000,
    production: 100000,
    produced:0,
    pro:0,
    pro1:0,
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro1-this.price;
            document.getElementById("amount").textContent=this.pro
            document.getElementById("bought8").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price8").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price8").textContent=this.price
            }
            rice=this.pro
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
                this.pro=(Math.round(100*(rice+this.produced)))/100
                rice=this.pro
                if(this.pro<0){
                    this.pro=0
                }
                document.getElementById("product8").innerHTML=this.pro2
                rice=(Math.round(100*rice))/100
                document.getElementById("amount").innerHTML=rice
            }
        }
}
var nuclear_fusion= {
    number:0,
    price:1700000000,
    production: 1000000,
    produced:0,
    pro:0,
    pro1:0,
    pro2:0,
    bought: function(){
        this.pro1=rice
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro1-this.price
            document.getElementById("amount").textContent=this.pro
            document.getElementById("bought9").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price9").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price9").textContent=this.price
            }
            rice=this.pro
            rice=(Math.round(100*rice))/100
            document.getElementById("amount").textContent=rice
        }        
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            this.pro2=(Math.round((this.pro2+this.produced)*100))/100
                this.pro=(Math.round(100*(rice+this.produced)))/100
                rice=this.pro
                if(this.pro<0){
                    this.pro=0
                }
                document.getElementById("product9").innerHTML=this.pro2
                rice=(Math.round(100*rice))/100
                document.getElementById("amount").innerHTML=rice
            }
        }
}
var weight={
    grams: 0,
    kilograms: 0,
    mtons:0,
    oz: 0,
    lb: 0,
    itons:0,
    goal:0,
    rice1:0,
    interva: function(){
        this.rice1=document.getElementById("amount").innerHTML
        this.grams=(Math.round((this.rice1/15.4324)*1000))/1000
        this.kilograms=(Math.round(1000000*(this.rice1/15432.4)))/1000000
        this.mtons=(Math.round(100000000*(this.rice1/15432400)))/100000000
        this.oz=(Math.round(10000*(this.rice1/437.5)))/10000
        this.lb=(Math.round((this.rice1/7000)*100000))/100000
        this.itons=(Math.round((this.rice1/14000000)*100000000))/100000000
        this.goal=(Math.round((this.rice1/52040000000000000)*1000000000000000000))/1000000000000000000
        document.getElementById("rice1").innerHTML=this.rice1
        document.getElementById("grams").innerHTML=this.grams
        document.getElementById("kilograms").innerHTML=this.kilograms
        document.getElementById("mtn").innerHTML=this.mtons
        document.getElementById("oz").innerHTML=this.oz
        document.getElementById("lb").innerHTML=this.lb
        document.getElementById("itn").innerHTML=this.itons
        document.getElementById("goal").innerHTML=this.goal
    },
}

function increase1(){
    rice++
    rice=(Math.round(100*rice))/100
    document.getElementById("amount").textContent=rice
}

setInterval(function(){
    plucking.made(),planting.made(),farming.made(),factory.made(),printing.made(),ritual.made(),spells.made(),chemistry.made(),nuclear_fusion.made(), imgchange(), evening()}, 100)
setInterval( function(){
    weight.interva(), imgchange()
}, 100)
//increasing function
//on off

function toggle(){
    if(oc==true){
        oc=false
        document.getElementById("toggle").disabled=true
        document.getElementById("toggl").disabled=false
    }
    else{
        document.getElementById("toggl").disabled=true
        document.getElementById("toggle").disabled=false
        oc=true
    }
}
function change(){
    b++
    if(b==4){
        b=0
    }
}
function imgchange(){
    if(rice/52040000000000000>=0 && rice/52040000000000000<0.25){
      if(imgElement){
                imgElement.setAttribute("src", "will/media/empty.png")
      }
    }
    else if(rice/52040000000000000>=0.25 && rice/52040000000000000<0.5){
        imgElement.setAttribute("src", "will/media/quarter.png")
    }
    else if(rice/52040000000000000>=0.5 && rice/52040000000000000<0.75){
        imgElement.setAttribute("src", "will/media/half.png")
    }
    else if(rice/52040000000000000>=1){
        imgElement.setAttribute("src", "will/media/full.png")
    }
}
document.getElementById("amount").textContent= rice;
function hi(){
    rice=10
    document.getElementById("amount").textContent= rice;
}
//evening of the rice #
function evening(){
    rice=(Math.round(1000*rice))/1000
    document.getElementById("amount").textContent=rice;
}
// start 1 plucking
document.getElementById("buy1").addEventListener("click", function(){plucking.bought()})
document.getElementById("bought1").innerHTML=plucking.number
document.getElementById("price1").innerHTML=plucking.price
//2 planting
document.getElementById("buy2").addEventListener("click", function(){planting.bought()})
document.getElementById("bought2").innerHTML=planting.number
document.getElementById("price2").innerHTML=planting.price
//3 farming
document.getElementById("buy3").addEventListener("click", function(){farming.bought()})
document.getElementById("bought3").innerHTML=farming.number
document.getElementById("price3").innerHTML=farming.price
//4 factory
document.getElementById("buy4").addEventListener("click", function(){factory.bought()})
document.getElementById("bought4").innerHTML=factory.number
document.getElementById("price4").innerHTML=factory.price
//5 printing
document.getElementById("buy5").addEventListener("click", function(){printing.bought()})
document.getElementById("bought5").innerHTML=printing.number
document.getElementById("price5").innerHTML=printing.price
//6 ritual
document.getElementById("buy6").addEventListener("click", function(){ritual.bought()})
document.getElementById("bought6").innerHTML=ritual.number
document.getElementById("price6").innerHTML=ritual.price
//7 spells
document.getElementById("buy7").addEventListener("click", function(){spells.bought()})
document.getElementById("bought7").innerHTML=spells.number
document.getElementById("price7").innerHTML=spells.price
//8 chemistry
document.getElementById("buy8").addEventListener("click", function(){chemistry.bought()})
document.getElementById("bought8").innerHTML=chemistry.number
document.getElementById("price8").innerHTML=chemistry.price
//9 nuclear_fusion
document.getElementById("buy9").addEventListener("click", function(){nuclear_fusion.bought()})
document.getElementById("bought9").innerHTML=nuclear_fusion.number
document.getElementById("price9").innerHTML=nuclear_fusion.price