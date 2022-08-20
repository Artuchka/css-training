const btnUp = document.querySelector("[data-btn-up]")
const btnDown = document.querySelector("[data-btn-down]")

const leftSideElement = document.querySelector("[data-left-side]")
const rightSideElement = document.querySelector("[data-right-side]")

let imageNumber = 1
let imagesAmount = 4

btnUp.addEventListener("click", moveUp)
btnDown.addEventListener("click", moveDown)

leftSideElement.style.top = `-300vh`

function moveUp() {
	if (imageNumber + 1 > imagesAmount) {
		imageNumber = 1
	} else {
		imageNumber = Math.min(imageNumber + 1, imagesAmount)
	}

	console.log(imageNumber)
	setPos()
}

function moveDown() {
	if (imageNumber - 1 < 1) {
		imageNumber = 4
	} else {
		imageNumber = Math.max(imageNumber - 1, 1)
	}
	console.log(imageNumber)
	setPos()
}

function setPos() {
	leftSideElement.style.top = `-${100 * (imagesAmount - imageNumber)}vh`
	rightSideElement.style.top = `-${100 * (imageNumber - 1)}vh`
}
