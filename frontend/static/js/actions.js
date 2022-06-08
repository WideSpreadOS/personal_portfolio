const win = document.body
const colorSchemeBtn = document.getElementById('colorSchemeBtn')

colorSchemeBtn.addEventListener('click', () => {
    win.classList.toggle('light')
    win.classList.toggle('dark')

})