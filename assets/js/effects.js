/**
 * 效果函数
 */
window.addEventListener('click', (e) => {
  const x = e.clientX
  const y = e.clientY
  const clickEffect = document.createElement('div')
  clickEffect.style.position = 'fixed'
  clickEffect.style.top = y - 5 + 'px'
  clickEffect.style.left = x - 5 + 'px'
  clickEffect.style.width = '10px'
  clickEffect.style.height = '10px'
  clickEffect.style.cursor = 'default'
  clickEffect.style.borderRadius = '50%'
  clickEffect.style.opacity = '0.9'
  clickEffect.style.zIndex = '9999'
  clickEffect.innerText = '🎈'
  document.body.appendChild(clickEffect)
  setTimeout(() => {
    document.body.removeChild(clickEffect)
  }, 1000)
})