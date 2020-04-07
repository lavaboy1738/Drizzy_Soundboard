window.addEventListener("keydown", function(e){
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!sound){return}
    sound.currentTime = 0;
    sound.play();
    key.classList.add("playing")
    setTimeout(() => {
        key.classList.remove("playing")
    }, 70);
})

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav");
const wrapper = document.querySelector(".wrapper")
const join = document.querySelector(".join")
const modal = document.querySelector(".modalBackground")
const closeButton = document.querySelector(".closeButton")


hamburger.addEventListener("click", toggleNav)
join.addEventListener("click", toggleModal)
closeButton.addEventListener("click", toggleModal)

function toggleNav(){
    menu.classList.toggle("openMenu");
    wrapper.classList.toggle("shift");
    animateHamburger();
}

function animateHamburger(){
    for(let bar of hamburger.children){
        bar.classList.toggle("change");
    }
}

function toggleModal(){
    modal.classList.toggle("openModal")
}
