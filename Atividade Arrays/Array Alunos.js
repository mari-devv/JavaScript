//Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 

var listaAluno = [];

        cadastrarAluno();

        function cadastrarAluno() {
            var stop = true;

            do {
                let nomeAluno = prompt('Por favor, informe o nome da(o) Aluno:');

                if (nomeAluno.toUpperCase() === 'PARE') {
                    stop = false;
                    break;
                };

                listaAluno.push(nomeAluno);
                console.log(listaAluno);

                alert("Sucesso! Aluno " + nomeAluno + " foi cadastrada(o) com sucesso!\n");

            } while (stop == true)
        }

        function listarAlunos(lista) {
            if (lista.length === 0) {
                console.log("Nenhum aluno cadastrado.");
            } else {
                console.log("Lista de Alunos:");
                for (let i = 0; i < lista.length; i++) {
                    console.log((i + 1) + ". " + lista[i]);
                }
            }
        }

        listarAlunos(listaAluno);