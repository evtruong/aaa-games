
var name=prompt("What would your user name be?")
document.getElementById("demo").innerHTML = name;
//main section//
var oc=false
var to="on"
var rice=1
var plucking= {
    number:0,
    price:15 ,
    production: 0.1,
    produced:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            rice=rice-this.price
            document.getElementById("bought").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price").textContent=this.price
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
        if(oc==false){
            this.produced=this.number*this.production
            document.getElementById("product").innerHTML=this.produced
        }
    }    
},
var planting= {
    number:0,
    price:100,
    production: 1,
    produced:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            rice=rice-this.price
            document.getElementById("bought").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price").textContent=this.price
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
        if(oc==false){
            this.produced=this.number*this.production
            document.getElementById("product").innerHTML=this.produced
        }
    }    
},
var farming= {
    number:0,
    price:1100,
    production: 0.1,
    produced:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            rice=rice-this.price
            document.getElementById("bought").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price").textContent=this.price
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
        if(oc==false){
            this.produced=this.number*this.production
            document.getElementById("product").innerHTML=this.produced
        }
    }
}
var factory={
    number:0,
    price:1 ,
    production: 0.1,
    produced:0,
    bought: function(){
        if(rice>=this.price && oc==false){
            this.number++;
            rice=rice-this.price
            document.getElementById("bought").textContent=this.number
            if (this.price<10) {
                this.price=Math.ceil(this.price*1.15)
                document.getElementById("price").textContent=this.price
            }
            else{
                this.price=Math.round(this.price*1.15)
                document.getElementById("price").textContent=this.price
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
        if(oc==false){
            this.produced=this.number*this.production
            document.getElementById("product").innerHTML=this.produced
        }
    }    
}
document.getElementById("buy").addEventListener("click", function(){plucking.bought()})
document.getElementById("buy").addEventListener("click", function(){plucking.made()})
document.getElementById("bought").innerHTML=plucking.number
document.getElementById("price").innerHTML=plucking.price

//increasing function
function base(){
    for(var i=0; i<1; i++ ){
        rice++;
        document.getElementById("amount").innerHTML= rice;
    };

}
//on off
function toggle(){
    if(oc==true){
        oc=false
        to="on"
        document.getElementById("tog").textContent=to
    }
    else{
        to="off"
        document.getElementById("tog").textContent=to
        oc=true
    }
}
document.getElementById("amount").textContent= rice;
if(rice>=1000000000000){
    alert("Good job you have won")
}
