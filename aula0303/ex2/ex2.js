const butao1 = document.querySelector('#b1')
const butao2 = document.querySelector('#b2')

butao1.addEventListener('click', clicar);
butao2.addEventListener('click', melhorar);

let pontuacao = 0
let producao = 1
let custo = 5

function atualizar() {
    butao1.textContent = 'Pontuação: ' + pontuacao;
    butao2.textContent = 'Custo: ' + custo.toFixed(0) + ' Produção: ' + producao;
}

function clicar() {
    pontuacao += producao
    atualizar();
} 

function melhorar() {
    if (pontuacao >= custo) {
        
        pontuacao -= custo
        producao += 1
        
        custo = Math.floor(custo * 1.5)
        
        atualizar();
    }
}