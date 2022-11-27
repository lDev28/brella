const $ = document

const burgerMenu = $.getElementById('burgerMenu')
burgerMenu.addEventListener('click', myBurger)

function myBurger() {
	$.querySelector('.header__menu').classList.toggle('active')
	$.querySelector('.header__burger').classList.toggle('active')
	$.body.classList.toggle('active')
}
