const aumentar = document.getElementById('aumentar')
const diminuir = document.getElementById('diminuir')
let tamanho_fonte = window.getComputedStyle(document.body).fontSize.split('px')[0]

aumentar.addEventListener('click', () => {
  document.body.style.fontSize = tamanho_fonte++ + 'px'
})

diminuir.addEventListener('click', () => {
  document.body.style.fontSize = tamanho_fonte-- + 'px'
})