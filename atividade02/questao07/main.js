const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
  const texto = document.getElementById('caixa_de_texto_1').value
  document.getElementById('caixa_de_texto_2').value = texto
})