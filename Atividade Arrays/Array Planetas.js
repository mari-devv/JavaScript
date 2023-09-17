 // Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.

let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
        
        function nomePlaneta() {
            var nome = prompt("Digite o nome do Planeta");
            if (nome) {
                if (planetas.includes(nome)){
                    alert(nome + " está na lista de Planetas!");
                }
                else {
                    alert(nome + " não está na lista de Planetas!");
                }
            } 
            else {
                alert("Você não digitou um nome válido.");
            }

        }   
        nomePlaneta();
        