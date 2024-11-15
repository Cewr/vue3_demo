function setRem() {
  const baseSize = 10
  const scale = document.documentElement.clientWidth / 375
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

setRem()
window.addEventListener('resize', setRem)
