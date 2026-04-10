const nave = document.querySelector('img')


let x = 200;
let y = 200;
const altura = 400
const largura = 400
const velocidade = 10

nave.style.left = x + "px"
nave.style.top = y + "px"


document.body.addEventListener('keydown', (jogo) => {

    console.log(jogo.key)

    if (jogo.key == 'w' && y > 0) {
        y -= velocidade
    }
    if (jogo.key == 'a' && x > 0) {
        x -= velocidade
    }
    if (jogo.key == 's' && y < altura - nave.height) {
        y += velocidade
    }
    if (jogo.key == 'd' && x < largura - nave.width) {
        x += velocidade
    }

    nave.style.left = x + "px"
    nave.style.top = y + "px"
}

);