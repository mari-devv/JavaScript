 // 1
 let aluno = {
    nome: "Maria",
    idade: 20,
    notas: [6.0, 8.0, 9.0]
};
console.log(aluno.nome, aluno.idade, aluno.notas); // exibe o nome do aluno

// 2
function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
        //O += é a concatenação, serve para no caso "+" somar e o "=" guardar na variável.
    }
    return soma / notas.length;
}

let media = calcularMedia(aluno.notas);
console.log(`A média do aluno é ${media}`);

// 3
let carros = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
}
function exibirDetalhes(carr){
    console.log(`Marca: ${carr.marca}`);
    console.log(`Modelo: ${carr.modelo}`);
    console.log(`Ano: ${carr.ano}`);
}

exibirDetalhes(carros);

// 4
let pessoas = {
    nome: "Maria Clara",
    sobrenome: "Cordeiro"
}

function exibirNomeSobrenome(nome){
    console.log(`${nome.nome}`);
    console.log(`${nome.sobrenome}`);
}
exibirNomeSobrenome(pessoas);

// function exibirNomeSobrenome(x { console.log(x.nome, x.sobrenome, x.idade);
