let position = 0
let slidesToShow = 5
let slidesToScroll = 2

const sliderContainer = document.querySelector('.slider__body')
const sliderTrack = document.querySelector('.slider__track')
const sliderItems = document.querySelectorAll('.slider__item')
const btnPrev = document.querySelector('.slider__btn-prev')
const btnNext = document.querySelector('.slider__btn-next')
const itemCount = sliderItems.length

function render() {
	if (sliderContainer.clientWidth <= 420) {
		slidesToScroll = 1
		slidesToShow = 1
	} else if (sliderContainer.clientWidth <= 600) {
		slidesToScroll = 1
		slidesToShow = 2
	} else if (sliderContainer.clientWidth <= 800) {
		slidesToShow = 3
	} else if (sliderContainer.clientWidth <= 1000) {
		slidesToShow = 4
	} else {
		slidesToShow = 5
	}
}
window.addEventListener('resize', render)
render()



const itemWidth = sliderContainer.clientWidth / slidesToShow
const movePosition = slidesToScroll * itemWidth


sliderItems.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
	const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth

	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

	setPosition()
	checkBtns()
})

btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth

	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

	setPosition()
	checkBtns()
})

const setPosition = () => {
	sliderTrack.style.transform = `translateX(${position}px)`
}

const checkBtns = () => {
	btnPrev.disabled = position === 0
	btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth
}
checkBtns()

