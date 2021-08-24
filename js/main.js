document.querySelector("button").addEventListener("click", function(){
    document.querySelector("#mobile_menu").classList.add("show")
    document.querySelector("#mobile_menu").classList.remove("hide")
})

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector("#mobile_menu").classList.remove("show")
    document.querySelector("#mobile_menu").classList.add("hide")
})