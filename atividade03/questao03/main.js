document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('botao').addEventListener('click', calcularEngajamento)
});

function calcularEngajamento() {
  const interacoes = document.getElementById('interacoes').value.trim();
  const visualizacoes = document.getElementById('visualizacoes').value.trim();
  if (isNaN(interacoes) || isNaN(visualizacoes) || interacoes.length == 0 || visualizacoes.length == 0) {
    exibirErro('Insira apenas números!', 'erro')
  } else {
    const engajamento = document.getElementById('engajamento')
    engajamento.innerText = (interacoes / visualizacoes) * 100
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