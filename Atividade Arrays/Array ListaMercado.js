//1 Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas. 
//Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 
//Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 
//Sempre que o usuário procurar por uma que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 
//Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

let frutas = ["morango", "uva", "manga", "goiaba"];

        function listaDeCompras() {
            while (frutas.length > 0) {
                alert("Lista de frutas disponíveis: " + frutas.join(", "));

                var frutaRemover = prompt("Digite o nome da fruta a ser removida:");

                if (frutas.includes(frutaRemover)) {
                    frutas.splice(frutas.indexOf(frutaRemover), 1);
                    alert("Fruta foi retirada da lista.");
                } else {
                    alert("Fruta indisponível no nosso mercado.");
                }
            }
            alert("Lista de compras finalizada");
        }
        listaDeCompras();
        