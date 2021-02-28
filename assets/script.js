//Auto play Audio
window.addEventListener("load", () =>{
    const audio = new Audio();
    audio.src = "./fatiha.mp3"
    audio.play()
})

window.addEventListener("scroll", () => {
    const container = document.querySelector(".container")
    console.log(window.scrollY);
    container.classList.add('cloud')
    if(window.scrollY >= 50) container.classList.remove("cloud")
    //else container.classList.remove("cloud")
})