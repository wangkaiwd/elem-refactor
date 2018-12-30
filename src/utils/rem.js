// 整体思路：通过屏幕宽度动态获取html的font-size
const setHtmlFont = () => {
  const htmlWidth = document.documentElement.offsetWidth
  const htmlEle = document.querySelector('html')
  htmlEle.style.fontSize = `${htmlWidth / 7.5}px`
}
setHtmlFont()
window.addEventListener('resize', setHtmlFont)