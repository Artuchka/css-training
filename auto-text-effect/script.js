const speedElement = document.querySelector("[data-speed]")
const textElement = document.querySelector("[data-text]")

let speed = 1
const text = "we love proga!"
const lettersAmount = text.length

speedElement.addEventListener("input", (e) => {
	speed = parseInt(speedElement.value)
})

setInterval(showText, ((lettersAmount + 1) * 1000) / speed)

function showText() {
	let index = 0
	textElement.innerHTML = ""
	console.log(speed)
	const intervalId = setInterval(() => {
		textElement.textContent += text[index]
		console.log(text[index], index)
		index++
	}, 1000 / speed)

	setTimeout(() => {
		clearInterval(intervalId)
		textElement.textContent = ""
	}, ((lettersAmount + 1) * 1000) / speed)
}
