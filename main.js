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
