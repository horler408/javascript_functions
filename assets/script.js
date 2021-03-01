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

//Table code
let channel = "I am interested in learning Python Java and Php. Now I wish to share my knowledge";
let word = channel.split(" ")

let checkWordLength = word.length > 10 ? 'word id greater than 10' : 'wordis less than 10'

let summary = {
    result: checkWordLength,
    wordLength = word.length 
};

console.table(summary);