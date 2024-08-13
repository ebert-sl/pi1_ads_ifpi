document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('botaoErro').addEventListener('click', () => {
    exibirErro('Este é um erro genérico', 'mensagemErro')
  });
});

function exibirErro(mensagem, id) {
  const errorMessage = document.getElementById(id);
  errorMessage.innerText = mensagem;
  errorMessage.classList.remove('oculto');
  setTimeout(() => { 
    errorMessage.classList.add('oculto');
  }, 3000);
}