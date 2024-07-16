const botao1 = document.getElementById('botao1')
const botao2 = document.getElementById('botao2')

botao1.addEventListener('click', () => {
  document.body.style.backgroundColor = "#000000"
  document.body.style.color = "#FFFFFF"
})

botao2.addEventListener('click', () => {
  document.body.style.backgroundColor = "#FFFFFF"
  document.body.style.color = "#000000"
})