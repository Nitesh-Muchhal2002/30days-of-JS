//4 pillors off DOM

//1.selection of an element
//2.changing html
//3.changing css
//4.event listener

const eme=document.querySelector("h1");
// eme.innerHTML="change"
// eme.style.color="red";
// eme.style.backgroundColor="black"
// eme.addEventListener("click",()=>{
//     eme.style.backgroundColor="blue"
//     eme.style.color="green"
// })

const blub=document.querySelector("#blub")
const onn=document.querySelector("#btn")
const off=document.querySelector("#btn1")

var flag=0;
onn.addEventListener("click",function(){
    if(flag==0)
    {
        blub.style.backgroundColor="yellow"
        flag=1
    }
    else {
        blub.style.backgroundColor="transparent"
        flag=0
    }
    
})
off.addEventListener("click",()=>{
    blub.style.backgroundColor="gray"
})
blub.innerHTML="<h1>I am blub</h1>"

let newButton=document.createElement("button")
 newButton.innerText="clickMe"
 newButton.style.backgroundColor="red"
document.querySelector("body").prepend(newButton)
console.log(newButton)