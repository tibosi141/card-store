(() => {
  const baseSize = 16
  const html = document.documentElement

  function setRem() {
    const scale = html.clientWidth / 1920
    const fontSize
      = baseSize * Math.min(scale, 2) > 12 ? baseSize * Math.min(scale, 2) : 12
    html.style.fontSize = `${fontSize}px`
  }

  setRem()

  window.addEventListener('resize', setRem)
})()
