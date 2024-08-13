document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('botao').addEventListener('click', carregarImagem)
})

function carregarImagem() {
  const resultado = document.getElementById('resultado')
  if (resultado.hasChildNodes()) {
    resultado.removeChild(resultado.children[0])
  }
  const uploadImagem = document.getElementById('uploadImagem')
  const arquivoSelecionado = uploadImagem.files[0]
  const img = document.createElement('img')
  img.src = URL.createObjectURL(arquivoSelecionado)
  resultado.appendChild(img)
}