const para=document.getElementsByTagName("p")
const tfa=document.getElementsByTagName("td")
const tha=document.getElementsByTagName("th")
for(var i=0; i<para.length-1; i++){
    para[i].className="jacquard-12-regular";
}
for(var i=0; i<tfa.length; i++){
    tfa[i].className="jersey-10-regular";
    tfa[i].style.color="#123C69"
    tfa[i].style.fontSize="2dvi"
    tfa[i].style.marginTop="auto"
    tfa[i].style.marginBottom="auto"
    tfa[i].style.marginRight="auto"
    tfa[i].style.marginLeft="auto"
}
for(var i=0; i<tha.length; i++){
    tha[i].className="jacquard-12-regular"
    tha[i].style.color="#Ac3b61"
    tha[i].style.fontSize="x-large"
    tfa[i].style.fontSize="1.6dvi"
    tha[i].style.fontWeight="600"
    tfa[i].style.marginTop="auto"
    tfa[i].style.marginBottom="auto"
    tfa[i].style.marginRight="auto"
    tfa[i].style.marginLeft="auto"
}