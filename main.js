const $clock = document.querySelector('.clock')
const $themeToggleButton = document.querySelector('.themeToggle-button')

let isDarkMode = false

function updateClock() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  $clock.textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(updateClock, 1000)
updateClock()

$themeToggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode
  document.body.className = isDarkMode ? 'dark' : 'light'
})
