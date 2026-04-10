const nomes = [puyol, lucas, salsicha, inacio, makita, thiago, joao, antonio, gabriel, poeta, saraiva, huzalo]

const buscaResultado = document.querySelector('#resultado');
const buscaInput = document.querySelector('#input');
const buscaExato = document.querySelector('#exato');
buscaInput.addEventListener('input', () => {})
    const filtro = [];

    for (let nome of nomes) {
        const nomeMinusculo=nome.toLowerCase();
        const inputMinusculo=buscaInput.value.toLowerCase();


    }

    

function atualiza (lista) {
    if (lista.length == 0) {
        buscaResultado
    }
}

buscaExato.addEventListener('click', () => {
    for (let nome of nomes) {
        if (nome ==buscaInput.value) {
            const index=nomes.indexOf(buscaInput.value);
            buscaResultado.innerHTML='o nome '+nome+ "esta na posicao "+nomes;
            break
        } else {
            buscaResultado.innerHTML='o nome '+nome+ "não foi achado";
            
        }
    }

})