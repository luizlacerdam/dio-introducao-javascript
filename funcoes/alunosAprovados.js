const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];
const media = 5;

function alunosAprovados(array,media) {
    let aprovados = [];
    for(aluno of alunos){
        if(aluno.nota >= media){
            aprovados.push(aluno.nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, media));