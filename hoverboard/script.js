const boxContainer = document.querySelector(".boxes-container")
const boardSize = 15
const boxAmount = boardSize ** 2

document.querySelector("body").style.setProperty("--boardSize", boardSize)

colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]
for (let i = 1; i < boxAmount; i++) {
	const box = document.createElement("div")
	box.classList.add("box")

	boxContainer.append(box)
}

boxContainer.addEventListener("mouseover", (e) => {
	if (!e.target.matches(".box")) return

	e.target.style.setProperty("--boxHoverBgColor", getRandomColor())
})

function getRandomColor() {
	return colors[getRandom(colors.length - 1)]
}

function getRandom(max) {
	return Math.floor(Math.random() * (max + 0.9))
}
