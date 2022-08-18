const btnPrev = document.querySelector("[data-btn-prev]")
const btnNext = document.querySelector("[data-btn-next]")

const body = document.querySelector("body")

setActiveImage()

btnNext.addEventListener("click", (e) => {
	nextImage()
})
btnPrev.addEventListener("click", (e) => {
	previousImage()
})

function nextImage() {
	const imageElements = Array.from(document.querySelectorAll("[data-image]"))

	const currentImage = imageElements.find((imageElement) =>
		imageElement.classList.contains("active")
	)
	let nextImage = currentImage.nextElementSibling

	if (!nextImage.matches("[data-image]")) {
		nextImage = imageElements[0]
	}

	currentImage.classList.remove("active")
	setActive(nextImage, nextImage.dataset.url)
}

function previousImage() {
	const imageElements = Array.from(document.querySelectorAll("[data-image]"))

	const currentImage = imageElements.find((imageElement) =>
		imageElement.classList.contains("active")
	)
	let prevImage = currentImage.previousElementSibling

	if (!prevImage.matches("[data-image]")) {
		prevImage = imageElements[imageElements.length - 1]
	}

	currentImage.classList.remove("active")
	setActive(prevImage, prevImage.dataset.url)
}

function setActive(imageElement, url) {
	imageElement.style.setProperty("background-image", `url(${url})`)
	imageElement.classList.add("active")
	body.style.setProperty("background-image", `url(${url})`)
}

function setActiveImage() {
	const imageActive = Array.from(
		document.querySelectorAll("[data-image]")
	).find((imageElement) => imageElement.classList.contains("active"))
	setActive(imageActive, imageActive.dataset.url)
}
