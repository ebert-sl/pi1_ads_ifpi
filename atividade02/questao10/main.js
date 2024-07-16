const botao = document.getElementById('botao')
let valor = 0

botao.addEventListener('click', () => {
  const campo_calculadora = document.getElementById('campo_calculadora')
  const valor_novo = parseInt(campo_calculadora.value)
  if (isNaN(valor_novo)) {
    return alert('Não pode valores diferentes de números!')
  }
  const soma = document.getElementById('soma')
  const subtracao = document.getElementById('subtracao')
  const multiplicacao = document.getElementById('multiplicacao')
  const divisao = document.getElementById('divisao')
  if (soma.checked) {
    campo_calculadora.value = valor + valor_novo
  }
  if (subtracao.checked) {
    campo_calculadora.value = valor - valor_novo
  }
  if (multiplicacao.checked) {
    campo_calculadora.value = valor * valor_novo
  }
  if (divisao.checked) {
    campo_calculadora.value = valor / valor_novo
  }
  valor = parseInt(campo_calculadora.value)
})