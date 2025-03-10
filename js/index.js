const navHamburger = document.querySelector(".fa-bars");
const navUl = document.querySelector("#nav-ul")

navHamburger.addEventListener("click", (event) => {

    if(navUl.style.display === "none" ){
        navUl.style.display = "block";
        navUl.classList.add("animate__Animated animate__fadeInRight");
    }
    else{
        navUl.style.display = "none";
        navUl.classList.add("animate__Animated animate__fadeOutRight")
    }

})


//seleciona todas as seções que receberão a animação do estilo "fade-down"
const fadeDownItems = document.querySelectorAll(".fade-down-section > *");
window.addEventListener("load",() => {
    fadeDownItems.forEach(element => {
        element.style.display= "none";
    })
})

window.addEventListener("scroll" , () =>{

    fadeDownItems.forEach(element => {
        const clientRect = element.getBoundingClientRect();
        const wHeight = window.innerHeight;
        if(clientRect.top <= wHeight * 0.8) {
           fadeDown(element);
        }
    })


})


//função que invoca o comportamento de fadeDown adicionando as classes 
function fadeDown(item) {
    item.classList.add("animate__animated");
    item.classList.add("animate__fadeInDown")
    item.style.display = "flex"
}
