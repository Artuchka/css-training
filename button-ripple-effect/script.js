const btn = document.querySelector("[data-btn]")
const body = document.querySelector("body")
const circleContainer = document.querySelector("[data-circle-container]")

btn.addEventListener("click", (e) => {
	circleContainer.innerHTML = ""

	const circle = document.createElement("div")
	circle.classList.add("circle")
	circle.style.top = `${e.layerY}px`
	circle.style.left = `${e.layerX}px`
	circleContainer.append(circle)
	let size = 0
	const sizeStep = 3
	const maxSize = 400

	const intervalId = setInterval(() => {
		circle.style.width = `${size}px`
		circle.style.height = `${size}px`
		size += sizeStep

		if (size > maxSize) {
			circleContainer.innerHTML = ""
			clearInterval(intervalId)
		}
	}, 1)
})
