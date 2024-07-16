const div = document.getElementById('paragrafos')
const div_filhos = div.childNodes
let numero_paragrafos = 0
for (const filho of div_filhos) {
  if (filho.nodeName == 'P') {
    numero_paragrafos++
  }
}
const contador = document.getElementById('contador_paragrafos')
contador.innerHTML = '<p>' + numero_paragrafos + ' parágrafos</p>'