// selecione o botão usando o método getElementById
var botao = document.getElementById("botao");
var botao2 = document.getElementById("botao2");

// adicione um evento de clique ao botão
botao.addEventListener("click", function() {
  // selecione o parágrafo usando o método getElementById
  var paragrafo = document.getElementById("paragrafo");
  // altere o texto do parágrafo
  paragrafo.textContent = "O texto deste parágrafo foi alterado!";
});

botao2.addEventListener("click", function() {
  var paragrafo = document.getElementById("paragrafo");
  paragrafo.textContent = "";
});