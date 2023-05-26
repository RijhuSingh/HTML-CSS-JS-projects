const bars=document.querySelector(".fa-bars");
const sidebar=document.querySelector(".sidebar")
const closingButton=document.querySelector(".fa-sharp")

 bars.addEventListener("click",()=>{
    sidebar.classList.toggle("show-sidebar")
 })

 closingButton.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar")
 })