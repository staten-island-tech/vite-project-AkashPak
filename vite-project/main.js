import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { DomSelectors } from './Dom.js'
import { Menu } from './menu.js'






function Insert(dfw){    
dfw.forEach((d)=> {document.querySelector(".flex-container").insertAdjacentHTML("beforebegin",
`<div class="Card">
<h1 class="Itemtitle">${d.ItemName}</h1>
<img src= "${d.ItemImage}" alt="" class="ItemImage">
<h2 class="ItemPrice">${d.ItemPrice}</h2>
</div>`)});
}

Insert(Menu);
document.querySelector(".form").addEventListener("submit", (e) => 
    e.preventDefault());

function remov(){
    const remove = document.querySelectorAll(".Card");
    remove.forEach((dsa)=>dsa.remove())
}


const Appetis= Menu.filter((Monke)=>Monke.ItemCat.includes("Appetizer"));
DomSelectors.appetize.addEventListener("click",
function(){
remov();
Insert(Appetis)});


const Fams= Menu.filter((gas)=>gas.ItemSize.includes("Family"));
DomSelectors.familyserv.addEventListener("click", 
function(){
remov();
Insert(Fams)});


const main= Menu.filter((da)=>da.ItemCat.includes("Main"));
DomSelectors.MainCourse.addEventListener("click",
function(){ 
remov();
Insert(main)});
console.log(Insert(main))

const sides= Menu.filter((dasf)=>dasf.ItemCat.includes("Side"));
DomSelectors.Sides.addEventListener("click",
function(){
remov();
Insert(sides)});
 

const dessert= Menu.filter((dx)=> dx.ItemCat.includes("Dessert"))
DomSelectors.Dessert.addEventListener("click",
function(){
remov();
Insert(dessert)});

const drinks= Menu.filter((omg)=> omg.ItemCat.includes("Drink"))
DomSelectors.Drinks.addEventListener("click",
function(){
remov();
Insert(drinks)});


