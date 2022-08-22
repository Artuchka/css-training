const numberContainer = document.querySelector("[data-number-container]")
const afterCountdown = document.querySelector("[data-after-countdown]")
const countdownEl = document.querySelector("[data-countdown]")
const replayBtn = document.querySelector("[data-replay-btn]")

const animationDuration = 1000
const animationDurationOffset = 1
const maxCountdown = 3

document
	.querySelector("body")
	.style.setProperty("--animationDuration", animationDuration + "ms")

startAnimation()

function startAnimation() {
	let countdown = 1
	const intervalId = setInterval(() => {
		countdown = addNum(countdown)
	}, animationDuration)
	showCountdown()

	setTimeout(() => {
		clearInterval(intervalId)
		showAfterCountdown()
	}, animationDuration * (maxCountdown + 1) - animationDurationOffset)
}

function addNum(countdown) {
	const numberEl = document.createElement("div")
	numberEl.classList.add("number")
	numberEl.textContent = countdown
	countdown++

	numberContainer.append(numberEl)

	setTimeout(() => {
		numberEl.remove()
	}, animationDuration)

	return countdown
}

function showAfterCountdown() {
	afterCountdown.classList.add("show")
	countdownEl.classList.remove("show")
}
function showCountdown() {
	afterCountdown.classList.remove("show")
	countdownEl.classList.add("show")
}

replayBtn.addEventListener("click", startAnimation)
