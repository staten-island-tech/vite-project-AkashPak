import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { DomSelectors } from './Dom.js'
import { Menu } from './menu.js'



function Insert(dfw){    
dfw.forEach((d)=> d.document.querySelector(".flex-container").insertAdjacentHTML("beforebegin",
`<div>
<h1 class="Itemtitle">${dfw.ItemName}</h1>
<h2 class="ItemPrice">${dfw.ItemPrice}</h2>
<img src= "${dfw.ItemImage}" alt="" class="ItemImage">
</div>`));}


document.querySelector(".whole").addEventListener("click", function(){Insert(Menu)})
