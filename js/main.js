const menuBtn = document.querySelector('.menu__btn')
const menuClose = document.querySelector('.menu__close-btn')
const menuList = document.querySelector('.menu__list')
const menuOverlay = document.querySelector('.menu-overlay')
menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('open')
	menuOverlay.classList.toggle('open')
})
menuClose.addEventListener('click', () => {
	menuList.classList.toggle('open')
	menuOverlay.classList.toggle('open')
})
menuOverlay.addEventListener('click', () => {
	menuList.classList.toggle('open')
	menuOverlay.classList.toggle('open')
	menuClose.classList.toggle('open')
})
