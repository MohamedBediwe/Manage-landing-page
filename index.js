const menuBtn = document.getElementById('menu-button')
const burger = document.querySelector('.burger')
const closeButton = document.querySelector('.close')
const mobileNav = document.querySelector('#mobile-nav')

menuBtn.addEventListener('click', () => {
    burger.classList.toggle('hidden')
    closeButton.classList.toggle('hidden')
    mobileNav.classList.toggle('hidden')
    if(!mobileNav.classList.contains('hidden')) {
        document.querySelectorAll('section, footer').forEach(item => {
            item.style.opacity = '0.3'
            item.style.zIndex = '-1'
        })
    } else {
        document.querySelectorAll('section, footer').forEach(item => {
            item.style.opacity = '1'
            item.style.zIndex = '1'
        })
    }
})