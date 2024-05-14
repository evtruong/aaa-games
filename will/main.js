
var name=prompt("What would your user name be?")
document.getElementById("demo").innerHTML = name;
//main section//
var oc=false
var to="on"
var rice=0
var totalrice=[]
var allinall=0
var weigh=0
var kilo=0
var buttonword="o"
var total=0
var b=0
var increase=0
var weightword="o"
var plucking= {
    number:1,
    price:15,
    //1/10 of a second interval it equals 0.01  1 second equals 0.1
    production:0.01,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought1").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price1").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price1").textContent=this.price
            }
        }
        document.getElementById("amount").innerHtml=rice
   
    },
    made: function(){
        if(this.number>=0, oc==false){
            this.produced=(this.number*this.production)
            if(this.produced!=NaN){
                this.pro=(Math.round(100*(this.pro+this.produced)))/100
                if(this.pro!==NaN){
                    if(this.pro<0){
                        this.pro=0
                    }
                    document.getElementById("product1").innerHTML=this.pro
                }
            }
        }
    }    
}
var planting= {
    number:0,
    price:100,
    //0.1 per 1/10 second 1 persecond 
    production: 0.1,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought2").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price2").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price2").textContent=this.price
            }
            
            if(rice<=0){
                alert(rice)
                rice=0
                alert(rice)
            }
            document.getElementById("amount").innerHTML= rice;
        }
    },
    made: function(){
        if(this.number>0, oc==false){
            this.produced=(this.number*this.production)
            this.pro=Math.round(10*(this.pro+this.produced))/10
            document.getElementById("product2").innerHTML=this.pro
        }
    }    
}
var farming= {
    number:0,
    price:1100,
    production: 1,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought3").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price3").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price3").textContent=this.price
            }
            
            if(rice<=0){
                alert(rice)
                rice=0
                alert(rice)
            }
            document.getElementById("amount").innerHTML= rice;
        }
    },
    
    made: function(){
        if(this.number>0, oc==false){
            this.produced=(this.number*this.production)
            this.pro=Math.round(this.pro+this.produced)
            if(this.produced!=NaN){
            document.getElementById("product3").innerHTML=this.pro
            }
        }
    }    
}
var factory= {
    number:0,
    price:12000,
    production: 10,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought4").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price4").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price4").textContent=this.price
            }
            
            if(rice<=0){
                alert(rice)
                rice=0
                alert(rice)
            }
            document.getElementById("amount").innerHTML= rice;
        }
    },
    
    made: function(){
        if(this.number>0, oc==false){
            this.produced=(this.number*this.production)
            this.pro=Math.round(this.pro+this.produced)
            if(this.produced!=NaN){
            document.getElementById("product4").innerHTML=this.pro
            }
        }
    }    
}
var printing= {
    number:0,
    price:130000,
    production: 100,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought5").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price5").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price5").textContent=this.price
            }
            
            if(rice<=0){
                alert(rice)
                rice=0
                alert(rice)
            }
            document.getElementById("amount").innerHTML= rice;
        }
    },
    
    made: function(){
        if(this.number>0, oc==false){
            this.produced=(this.number*this.production)
            this.pro=Math.round(this.pro+this.produced)
            if(this.produced!=NaN){
            document.getElementById("product5").innerHTML=this.pro
            }
        }
    }      
}
var ritual= {
    number:0,
    price:1400000,
    production: 1000,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought6").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price6").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price6").textContent=this.price
            }
            
            if(rice<=0){
                alert(rice)
                rice=0
                alert(rice)
            }
            document.getElementById("amount").innerHTML= rice;
        }
    },
    
    made: function(){
        if(this.number>0, oc==false){
            this.produced=(this.number*this.production)
            this.pro=Math.round(this.pro+this.produced)
            if(this.produced!=NaN){
            document.getElementById("product6").innerHTML=this.pro
            }
        }
    }      
}
var spells= {
    number:0,
    price:15000000,
    production: 10000,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought7").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price7").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price7").textContent=this.price
            }
            
            if(rice<=0){
                alert(rice)
                rice=0
                alert(rice)
            }
            document.getElementById("amount").innerHTML= rice;
        }
    },
    
    made: function(){
        if(this.number>0, oc==false){
            this.produced=(this.number*this.production)
            this.pro=Math.round(this.pro+this.produced)
            if(this.produced!=NaN){
            document.getElementById("product7").innerHTML=this.pro
            }
        }
    }       
}
var chemistry= {
    number:0,
    price:160000000,
    production: 100000,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought8").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price8").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price8").textContent=this.price
            }
            
            if(rice<=0){
                alert(rice)
                rice=0
                alert(rice)
            }
            document.getElementById("amount").innerHTML= rice;
        }
    },
    
    made: function(){
        if(this.number>0, oc==false){
            this.produced=(this.number*this.production)
            this.pro=Math.round(this.pro+this.produced)
            if(this.produced!=NaN){
            document.getElementById("product8").innerHTML=this.pro
            }
        }
    }       
}
var nuclear_fusion= {
    number:0,
    price:1700000000,
    production: 1000000,
    produced:0,
    pro:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            this.pro=this.pro-this.price
            document.getElementById("bought9").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price9").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price9").textContent=this.price
            }
            
            if(rice<=0){
                alert(rice)
                rice=0
                alert(rice)
            }
            document.getElementById("amount").innerHTML= rice;
        }
    },
    
    made: function(){
        if(this.number>0, oc==false){
            this.produced=(this.number*this.production)
            this.pro=Math.round(this.pro+this.produced)
            if(this.produced!=NaN){
            document.getElementById("product9").innerHTML=this.pro
            }
        }
    }       
}
// start 1 plucking
document.getElementById("buy1").addEventListener("click", function(){plucking.bought()})
document.getElementById("buy1").addEventListener("click", function(){plucking.made()})
document.getElementById("bought1").innerHTML=plucking.number
document.getElementById("price1").innerHTML=plucking.price
//2 planting
document.getElementById("buy2").addEventListener("click", function(){planting.bought()})
document.getElementById("buy2").addEventListener("click", function(){planting.made()})
document.getElementById("bought2").innerHTML=planting.number
document.getElementById("price2").innerHTML=planting.price
//3 farming
document.getElementById("buy3").addEventListener("click", function(){farming.bought()})
document.getElementById("buy3").addEventListener("click", function(){farming.made()})
document.getElementById("bought3").innerHTML=farming.number
document.getElementById("price3").innerHTML=farming.price
//4 factory
document.getElementById("buy4").addEventListener("click", function(){factory.bought()})
document.getElementById("buy4").addEventListener("click", function(){factory.made()})
document.getElementById("bought4").innerHTML=factory.number
document.getElementById("price4").innerHTML=factory.price
//5 printing
document.getElementById("buy5").addEventListener("click", function(){printing.bought()})
document.getElementById("buy5").addEventListener("click", function(){printing.made()})
document.getElementById("bought5").innerHTML=printing.number
document.getElementById("price5").innerHTML=printing.price
//6 ritual
document.getElementById("buy6").addEventListener("click", function(){ritual.bought()})
document.getElementById("buy6").addEventListener("click", function(){ritual.made()})
document.getElementById("bought6").innerHTML=ritual.number
document.getElementById("price6").innerHTML=ritual.price
//7 spells
document.getElementById("buy7").addEventListener("click", function(){spells.bought()})
document.getElementById("buy7").addEventListener("click", function(){spells.made()})
document.getElementById("bought7").innerHTML=spells.number
document.getElementById("price7").innerHTML=spells.price
//8 chemistry
document.getElementById("buy8").addEventListener("click", function(){chemistry.bought()})
document.getElementById("buy8").addEventListener("click", function(){chemistry.made()})
document.getElementById("bought8").innerHTML=chemistry.number
document.getElementById("price8").innerHTML=chemistry.price
//9 nuclear_fusion
document.getElementById("buy9").addEventListener("click", function(){nuclear_fusion.bought()})
document.getElementById("buy9").addEventListener("click", function(){nuclear_fusion.made()})
document.getElementById("bought9").innerHTML=nuclear_fusion.number
document.getElementById("price9").innerHTML=nuclear_fusion.price
//stop of get element 
//second increase
function increase1(){
    increase++
}
setInterval(function(){
    plucking.made(),planting.made(),farming.made(),factory.made(),printing.made(),ritual.made(),spells.made(),chemistry.made(), nuclear_fusion.made(), all(), weight(), imgchange();
}, 100);
//increasing function
function base(){
    for(var i=0; i<1; i++ ){
        rice++;
        document.getElementById("amount").innerHTML= rice;
    };

}
function all(){
    if(oc==false){
    totalrice[0]=plucking.pro
    totalrice[1]=planting.pro
    totalrice[2]=farming.pro
    totalrice[3]=factory.pro
    totalrice[4]=printing.pro
    totalrice[5]=ritual.pro
    totalrice[6]=spells.pro
    totalrice[7]=chemistry.pro
    totalrice[8]=nuclear_fusion.pro
    allinall=(Math.round(100*(totalrice[0]+totalrice[1]+totalrice[2]+totalrice[3]+totalrice[4]+totalrice[5]+totalrice[6]+totalrice[7]+totalrice[8]+increase)))/100
    rice=allinall
    document.getElementById("amount").innerHTML= rice;
    }
}
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
function weight(){
    if(b==0){
        weigh= (Math.round(100000*(rice/48)))/100000
        weightword=" grams"
        buttonword="Kilograms"
        document.getElementById("weight").innerHTML=weigh
        document.getElementById("bword").innerHTML=buttonword
        document.getElementById("word").innerHTML=weightword
    }
    if(b==1){
        weigh=(Math.round(100000000*(rice/48000)))/100000000
        weightword=" kilograms"
        buttonword="Metric Tons"
        document.getElementById("weight").innerHTML=weigh
        document.getElementById("bword").innerHTML=buttonword
        document.getElementById("word").innerHTML=weightword
    }
    if(b==2){
        weigh=(Math.round(100000000000*(rice/48000000)))/100000000000
        weightword=" metric tons"
        buttonword="Goal"
        document.getElementById("weight").innerHTML=weigh
        document.getElementById("bword").innerHTML=buttonword
        document.getElementById("word").innerHTML=weightword

    }
    if(b==3){
        weigh=(Math.round(1000000000000000*(rice/480000000000)))/1000000000000000
        weightword="% to goal"
        buttonword="Grams"
        document.getElementById("weight").innerHTML=weigh
        document.getElementById("bword").innerHTML=buttonword
        document.getElementById("word").innerHTML=weightword
    }
}
function change(){
    b++
    if(b==4){
        b=0
    }
}
function imgchange(){
    if(rice/480000000000>=0){
        document.getElementById("cup").src="media/empty.png"
    }
    else if(rice/480000000000>=0.25){
        document.getElementById("cup").src="media/quarter.png"
    }
    else if(rice/480000000000>=0.5){
        document.getElementById("cup").src="media/half.png"
    }
    else if(rice/480000000000>=1){
        alert("bob")
        document.getElementById("cup").src="media/full.png"
    }
}    


document.getElementById("amount").textContent= rice;
