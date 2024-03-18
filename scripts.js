var botao = document.getElementById("botao");
botao.addEventListener("click", alert);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados")

var email = document.getElementById("email");

function alertar(){
    //alert("nome.value + " " + "clicou no botão!!!");
    saida.innerText = "Nome: " + " " + nome.value +
                "\n E-mail: " + " " + email.value;
}