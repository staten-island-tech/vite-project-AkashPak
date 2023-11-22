import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { DomSelectors } from './Dom.js'
import { Menu } from './menu.js'



document.querySelector(".whole").insertAdjacentHTML("beforebegin",function(){
Menu.forEach((bang)=>`<div>
<h1 class="Itemtitle"> ${bang.ItemName.value}</h1>
<h2 class="ItemPrice"> ${bang.ItemPrice.value}</h2>
<img src=${bang.ItemImage.value} alt="" class="ItemImage">
</div>`)})

