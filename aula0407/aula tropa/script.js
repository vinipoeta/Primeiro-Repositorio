const aluno = {
    nome: 'puyol',
    idade: 17,
    cidade: 'SJ',
}

console.log (aluno.cidade)
aluno.cidade='GC'
console.log (aluno.cidade)

aluno.email = 'puyolsexo@gmail.com';

delete aluno.idade;
console.log (aluno);

//objeto literal

const produto = {
    nome:'caderno',
    preco: 14.67,
    estoque: 12
};

//objeto vazio

const usuario = {};

usuario.nome = 'Marina';
usuario.idade = 17;

const aluno1 = {
    nome: 'Ana',
    nota: 8.5,
    turma: '2AT'
};

console.log(Object.keys(aluno1)); // ['nome', 'nota', 'turma']
console.log(Object.values(aluno1)); // ['Ana', 8.5, '2AT']
console.log(Object.entries(aluno1)); // [['nome', 'Ana'], ['nota', 8.5], ['turma', '2AT']]