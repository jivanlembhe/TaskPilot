function addTask(){

const text = prompt("Task name")

if(!text) return

const card=document.createElement("div")

card.className="card"
card.draggable=true
card.innerText=text

card.addEventListener("dragstart",()=>{
dragged=card
})

document.getElementById("todo").appendChild(card)

}

let dragged

document.querySelectorAll(".column").forEach(col=>{

col.addEventListener("dragover",(e)=>{
e.preventDefault()
})

col.addEventListener("drop",()=>{
if(dragged){
col.appendChild(dragged)
}
})

})
