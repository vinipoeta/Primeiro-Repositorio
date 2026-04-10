const nave = document.querySelector('img')


let x = 200;
let y = 200;
const altura = 400
const largura = 400
const velocidade = 10

nave.style.left = x + "px"
nave.style.top = y + "px"

let w = false
let a = false
let s = false
let d = false

document.addEventListener("keydown", (jogo) => {
    if (jogo.key == "w") w = true
    if (jogo.key == "a") a = true
    if (jogo.key == "s") s = true
    if (jogo.key == "d") d = true
})

document.addEventListener("keyup", (e) => {
    if (e.key == "w") w = false
    if (e.key == "a") a = false
    if (e.key == "s") s = false
    if (e.key == "d") d = false
})

function mover() {
    if (w && y > 0) y -= velocidade
    if (a && x > 0) x -= velocidade
    if (s && y < altura - nave.height) y += velocidade
    if (d && x < largura - nave.width) x += velocidade

    nave.style.left = x + "px"
    nave.style.top = y + "px"

    setTimeout(mover, 16)
}

mover()