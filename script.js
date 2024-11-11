let button = document.querySelector("button")
let schoollink = document.querySelector("#school")
let unilink = document.querySelector("#uni")


button.addEventListener('click',() => {
    
    schoollink.innerHTML = "My School Website"
    unilink.innerHTML = "My University Website"
    
})