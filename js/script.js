const $ = document

const burgerMenu = $.getElementById('burgerMenu')
burgerMenu.addEventListener('click', myBurger)

function myBurger() {
	$.querySelector('.header__menu').classList.toggle('active')
	$.querySelector('.header__burger').classList.toggle('active')
	$.body.classList.toggle('active')
	$.querySelector('#btnTop').classList.toggle('active')
}


const btnTop = $.querySelector('#btnTop')

btnTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})


window.addEventListener('scroll', () => {

	if (window.scrollY > 100) {
		btnTop.style.display = 'block'
		btnTop.style.opacity = '100%'
	} else {
		btnTop.style.display = 'none'
	}

})