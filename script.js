var welcome = document.querySelector("#welcome-container")
var button = document.querySelector("#btn-close")

button.addEventListener("click", ()=>{
    welcome.classList.add("hidden")
})