const notas = [];

const qtd = +prompt("Quantos alunos a turma possui?");
let soma = 0;

for (let i = 1; i <= qtd; i++) {
    const nota = +prompt("Qual a nota do aluno " + i + "?");
    notas[i] = nota;
    soma += nota;
}
const media = soma / qtd;
for (let i = 1; i <= qtd; i++) {
    const desvio = notas[i] - media;
    console.log('Desvio do aluno ' + i + desvio)
}

console.log(notas);