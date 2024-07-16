const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
  const campo_texto = document.getElementById('campo_texto')
  const value = campo_texto.value
  const item = document.createElement('li')
  item.innerText = value
  document.getElementById('lista').appendChild(item)
})