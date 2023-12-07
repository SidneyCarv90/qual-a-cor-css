

const btn = document.querySelector(".btn")

const nomeCor = document.querySelector("#span-color")

const coresPorNome = document.querySelector("#cores-nome")

const coresHexa = document.querySelector("#cores-hexa")

coresPorNome.addEventListener("click", () => {

        btn.addEventListener("click", function mudarCorBackGround(){
        const colorsName = ["red", 'blue','green', 'yellow', 'black', 'white']

        let numeroAleatorio = Math.floor(Math.random() * colorsName.length)
        
        const backGround = document.querySelector("main")
        backGround.style.backgroundColor = colorsName[numeroAleatorio]
    
        nomeCor.innerHTML = `#${colorsName[numeroAleatorio]}`
})
})
