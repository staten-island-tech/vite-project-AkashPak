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

document.querySelector(".whole").addEventListener("click", Insert(Menu))

const Appetis= Menu.filter((Monke)=>Monke.ItemCat.includes("Appetizer"));
document.querySelector(".Appe").addEventListener("click",Insert(Appetis))

const Fams= Menu.filter((gas)=>gas.ItemSize.includes("Family"));
document.querySelector(".Family Serving").addEventListener("click",Insert(Fams))

