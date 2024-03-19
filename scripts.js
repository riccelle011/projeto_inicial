var botao = document.getElementById("botao");
botao.addEventListener("click", alert);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados")

var email = document.getElementById("email");

function alertar(){
    //alert("nome.value + " " + "clicou no botão!!!");
    saida.innerText = "Nome: " + " " + nome.value +
                "\n E-mail: " + " " + email.value;

                //buscar o endereço pelo cep
                const url = https: //´viacep.com.br/ws/${cep.value}/json´;

                fetch(url)
                .then(resposta=>resposta.json())
                .then(data => {
                    logradouro.value = data.logradouro;
                })
                .catch(error=>alert(error))               
}
}