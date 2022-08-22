const btnNext = document.querySelector("[data-btn-next]")
const btnPrev = document.querySelector("[data-btn-prev]")
const imageContainer = document.querySelector("[data-image-container]")
const imagesEl = document.querySelectorAll(".image")

// size for image and image container
const imageSize = 500

// duration for image switch
const animationDuration = 300

// duration between image switches
const animationIntervalDuration = 3000

// duration to wait until starting auto-switching images
// after clicking `prev` or `next` buttons
const afterClickIntervalGap = 1000

document
	.querySelector("body")
	.style.setProperty("--image-size", `${imageSize}px`)

document
	.querySelector("body")
	.style.setProperty("--animation-duration", `${animationDuration}ms`)

let imageNumber = 1
const maxImageNumber = imagesEl.length
let intervalId
resetInterval()

function resetInterval() {
	clearInterval(intervalId)
	intervalId = setInterval(moveNext, animationIntervalDuration)
}

btnNext.addEventListener("click", (e) => {
	moveNext()
	resetInterval()
})
btnPrev.addEventListener("click", (e) => {
	movePrev()
	resetInterval()
})

function moveNext() {
	imageNumber++
	setImage()
}

function movePrev() {
	imageNumber--
	setImage()
}

function setImage() {
	if (imageNumber < 1) {
		imageNumber = maxImageNumber
	} else if (imageNumber > maxImageNumber) {
		imageNumber = 1
	}
	imageContainer.style.transform = `translateX(-${
		(imageNumber - 1) * imageSize
	}px)`
}
