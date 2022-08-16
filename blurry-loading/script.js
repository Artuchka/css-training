const dog = document.querySelector(".dog")
const percentage = document.querySelector("#percentage")

let val = 0

let timerId = setInterval(() => {
	setPercentage(val)
	val = setPageBlur(val)

	if (val > 100) {
		percentage.classList.add("hide")
		clearInterval(timerId)
	}
}, 50)

function setPageBlur(value) {
	dog.style.setProperty("filter", `blur(${100 - value}px)`)
	return val + 1
}

function setPercentage(value) {
	percentage.textContent = Math.min(value, 100).toString()
}
