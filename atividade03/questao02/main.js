document.addEventListener('DOMContentLoaded', () => {
  const botaoExibir = document.getElementById('botaoExibir');
  botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
  const conteudo = document.getElementById('caixaDeTexto').value;
  if (conteudo.trim().length === 0) {
    exibirErro('O campo não deve estar vazio!', 'erro');
  } else {
    document.getElementById('conteudo').innerText = conteudo;
  }
}

function exibirErro(mensagem, id) {
  const errorMessage = document.getElementById(id);
  errorMessage.innerText = mensagem;
  errorMessage.classList.remove('oculto');
  setTimeout(() => { 
    errorMessage.classList.add('oculto');
  }, 3000);
}