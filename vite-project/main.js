import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { DomSelectors } from './Dom.js'
import { Menu } from './menu.js'






function Insert(dfw){    
dfw.forEach((d)=> document.querySelector(".flex-container").insertAdjacentHTML("beforebegin",
`<div class="Card">
<h1 class="Itemtitle">${d.ItemName}</h1>
<img src= "${d.ItemImage}" alt="" class="ItemImage">
<h2 class="ItemPrice">${d.ItemPrice}</h2>
</div>`));}

DomSelectors.wholemen.addEventListener("click", Insert(Menu))

const Appetis= Menu.filter((Monke)=>Monke.ItemCat.includes("Appetizer"));
DomSelectors.appetize.addEventListener("click", 
document.querySelector(".flex-container").innerHTML="",
Insert(Appetis))

const Fams= Menu.filter((gas)=>gas.ItemSize.includes("Family"));
DomSelectors.familyserv.addEventListener("click", 
document.querySelector(".flex-container").innerHTML="",
Insert(Fams))

const main= Menu.filter((da)=>da.ItemCat.includes("Main"));
DomSelectors.MainCourse.addEventListener("click",
document.querySelector(".flex-container").innerHTML="",
Insert(main))

const sides= Menu.filter((dasf)=>dasf.ItemCat.includes(".Side"));
DomSelectors.Sides.addEventListener("click",
document.querySelector(".flex-container").innerHTML="",
Insert(sides))

const dessert= Menu.filter((dx)=> dx.ItemCat.includes(".Dessert"))
DomSelectors.Dessert.addEventListener("click",
document.querySelector(".flex-container").innerHTML="", 
Insert(dessert))

