// const turma = {
//     nome: 'INF2AT',
//     alunos: ['Puyol', 'Salsicha', 'Lucas']
// }

// for (let aluno of turma.alunos) {
//     console.log(aluno)
// }

// const alunos = [
//     { nome: 'puyol', matricula: '001', email: 'ticudao123@gmail.com' },
//     { nome: 'salsicha', matricula: '002', email: 'gagagagogogo@gmail.com' },
//     { nome: 'lucas', matricula: '003', email: 'pobrerelaxado@gmail.com' },
// ]

// console.log(alunos[0].email);

const turmas = [
    {
        nome: 'INF2AM',
        alunos: [
            { nome: 'bittenca', matricula: '004', email: 'traira@gmail.com', nota: 2 },
            { nome: 'davi', matricula: '005', email: 'souprimodopuyol@gmail.com', nota: 3 },
            { nome: 'isadora', matricula: '006', email: 'sapatonagostosa@gmail.com', nota: 5 },
        ]
    },
    {
        nome: 'INF2AT',
        alunos: [
            { nome: 'puyol', matricula: '001', email: 'ticudao123@gmail.com', nota: 10 },
            { nome: 'salsicha', matricula: '002', email: 'gagagagogogo@gmail.com', nota: 5 },
            { nome: 'lucas', matricula: '003', email: 'pobrerelaxado@gmail.com', nota: 6 },
        ]
    }
]

const alunosTurma = turmas[1].alunos;
alunosTurma.forEach(aluno => {
    console.log(aluno.email);
})

const aprovados = alunos.filter( (aluno) => aluno.nota >= 7 );

const nomes = alunos.map( (aluno) => aluno.nome );

const soma = alunos.reduce( (total, aluno) => total + aluno.nota, 0 );