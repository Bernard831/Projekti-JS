const MjenjaBoje=document.querySelector(".Mjenjanje_boja");
const BojaPozadina=document.querySelector("body");

const Boje=["red","blue","grey","yellow","pink","green","purple","black","orange"]; // Boje koje korstimo

MjenjaBoje.addEventListener("click",PromjeniBoju);

function PromjeniBoju(){
 let random =Math.floor(Math.random()*Boje.length) //Odabir boja
 BojaPozadina.style.backgroundColor=Boje[random]; //Ispis boja
}
