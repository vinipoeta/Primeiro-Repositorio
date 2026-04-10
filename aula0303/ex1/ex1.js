const butao1 = document.querySelector('#b1')
const butao2 = document.querySelector('#b2')

butao1.addEventListener('click', aumenta);
let pontuacao = 0

function aumenta() {
    pontuacao++
    butao1.textContent = 'Pontuação: '+pontuacao;
}

butao2.addEventListener('click', diminui);

function diminui () {
    if (pontuacao>=10) {
        pontuacao-=10
        butao1.textContent = 'Pontuação: '+pontuacao;
    } else {
        butao1.textContent = 'Pontuação: 0';
        pontuacao=0
    }
}