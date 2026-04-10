const titulo = document.querySelector('h1'); 
const botao = document.querySelector('button');
botao.addEventListener('click',trocaTexto);

function trocaTexto () {
    let texto=prompt("texto tropa");
    titulo.textContent = texto
} 