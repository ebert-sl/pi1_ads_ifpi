const selectElement = document.getElementById('imagens')
const result = document.getElementById('imagem')

selectElement.addEventListener('change', (e) => {
  if (result.hasChildNodes()) {
    result.removeChild(result.children[0])
  }
  const img = document.createElement('img')
  img.src = e.target.value
  result.appendChild(img)
})