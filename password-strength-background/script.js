const form = document.querySelector("#form")
const passInputEl = document.querySelector("#password")
const body = document.querySelector("body")

const passLengthRequired = 10
const maxBlurValue = 300

calculateBlur()

form.addEventListener("submit", (e) => {
	e.preventDefault()
})

passInputEl.addEventListener("input", calculateBlur)

function calculateBlur() {
	const length = passInputEl.value.length

	const blur = getBlurOfPercentage(
		0,
		passLengthRequired,
		Math.max(passLengthRequired - length, 0),
		maxBlurValue
	)

	showBg(blur)
}

function showBg(blurValue) {
	body.style.setProperty("--bgBlur", `${blurValue}px`)
}

function getBlurOfPercentage(min, max, value, maxBlurValue) {
	return Math.round(
		(maxBlurValue * Math.round(((value - min) / (max - min)) * 100)) / 100
	)
}
