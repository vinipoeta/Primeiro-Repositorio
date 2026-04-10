const item = document.querySelector('#input-item');
const adicionar = document.querySelector('#btn-adicionar');
const limpar = document.querySelector('#btn-limpar');
const mensagem = document.querySelector('#mensagem');
const quantidade = document.querySelector('#total-itens');
const ultimo = document.querySelector('#ultimo-item');
const cadastrados = document.querySelector('#lista-itens');
const junta = document.querySelector('#lista-texto');

let lista = [];

function renderiza() {
    junta.innerHTML = '';
    for (let i = 0; i < lista.length; i++) {
        junta.innerHTML += "<li>" + lista.value + "</li>";
    }
}

adicionar.addEventListener ('click', () =>{
    lista.push (item.value);
    mensagem.textContent =("item "+lista+" adicionado com sucesso");

    quantidade.textContent=lista.length;

    ultimo.textContent=lista[lista.length-1];

    item.value ='';
    item.focus;

    cadastrados.textContent=lista.join (', ');
    renderiza();
})
limpar.addEventListener('click', ()=>{

    lista=[];
    mensagem.textContent=''
    quantidade.textContent='0';
    ultimo.textContent='Nenhum';
    item.value='';
    junta.textContent=("nenhum item cadastrado")
}
)