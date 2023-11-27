import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { DomSelectors } from './Dom.js'
import { Menu } from './menu.js'



function Insert(a){    
a.forEach((dawd)=>document.querySelector(".flex-container").insertAdjacentHTML("beforebegin",
`<div>
<h1 class="Itemtitle"> ${dawd.ItemName.value}</h1>
<h2 class="ItemPrice"> ${dawd.ItemPrice.value}</h2>
<img src= "${dawd.ItemImage.value}" alt="" class="ItemImage">
</div>`));}
Insert(Menu)

DomSelectors.wholemen.addEventListener("click",
Insert(Menu))
