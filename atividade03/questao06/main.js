document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('enviarBtn').addEventListener('click', enviarSelecao)
})

function enviarSelecao() {
  const redesSelecionadas = document.getElementById('redesSelecionadas')
  redesSelecionadas.innerHTML = ''
  const itens = document.getElementsByName('redesSociais')
  let itemSelecionado = false
  for (item of itens) {
    if (item.checked == true) {
      itemSelecionado = true
      const p = document.createElement('p')
      p.innerText = item.value
      redesSelecionadas.appendChild(p)
    }
  }
  if (!itemSelecionado) {
    exibirErro('Selecione ao menos uma opção!', 'erro')
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