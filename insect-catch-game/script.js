const btnPlayGame = document.querySelector("[data-play]")
const secondWindowEl = document.querySelector("[data-second-window]")
const playgroundEl = document.querySelector("[data-playground]")
const bodyEl = document.querySelector("body")
const timeEl = document.querySelector("[data-time]")
const scoreEl = document.querySelector("[data-score]")
const reloadBtn = document.querySelector("[data-reload-btn]")

window.intervalId = null

setWindow(0)

reloadBtn.addEventListener("click", (e) => {
	setWindow(1)
})

btnPlayGame.addEventListener("click", (e) => {
	setWindow(1)
})

secondWindowEl.addEventListener("click", (e) => {
	if (
		!e.target.matches(".choice") &&
		!e.target.matches(".choice_name") &&
		!e.target.matches(".choice_avatar img")
	)
		return

	let choiceName = null
	if (e.target.matches(".choice")) {
		choiceName = e.target.querySelector(".choice_name").textContent
	} else if (e.target.matches(".choice_name")) {
		choiceName = e.target.textContent
	} else if (e.target.matches(".choice_avatar img")) {
		choiceName =
			e.target.parentNode.parentNode.querySelector(
				".choice_name"
			).textContent
	}

	setWindow(2)
	startGame(choiceName)
})

function startGame(name) {
	let imgsrc
	switch (name) {
		case "butterfly":
			imgsrc = "img/butterfly_ordinary.svg"
			break
		case "butterfly albo":
			imgsrc = "img/butterfly_uniqe.svg"
			break
		case "bee":
			imgsrc = "img/bee.svg"
			break
		case "dragonfly":
			imgsrc = "img/dragonfly.svg"
			break
	}
	const timeStart = new Date()
	clearInterval(window.intervalId)
	window.intervalId = setInterval(() => {
		const offsetSeconds = (new Date() - timeStart) / 1000
		const seconds = parseInt(offsetSeconds % 60)
		const minutes = parseInt(Math.floor(offsetSeconds / 60))
		setTime({ minutes, seconds })
	}, 1000)
	playgroundEl.innerHTML = ""
	scoreEl.textContent = "0"
	addInsect(imgsrc)
}

function setTime({ minutes, seconds }) {
	timeEl.textContent = `${minutes}:${seconds}`
}
function incScore() {
	scoreEl.textContent = `${parseInt(scoreEl.textContent) + 1}`
}

function addInsect(src) {
	const playgroundWidth = playgroundEl.getBoundingClientRect().width
	const playgroundHeight = playgroundEl.getBoundingClientRect().height
	const insect = document.createElement("div")
	insect.classList.add("insect")

	insect.innerHTML = `<img src="${src}" alt="">`
	insect.style.left = `${getRandomNumber(playgroundWidth, 50)}px`
	insect.style.top = `${getRandomNumber(playgroundHeight, 50)}px`
	insect.style.transform = `rotate(${getRandomNumber(360, 0)}deg)`

	playgroundEl.appendChild(insect)
	insect.addEventListener("click", function (e) {
		this.remove()
		incScore()
		addInsect(src)
		addInsect(src)
	})
}

function getRandomNumber(max, offset) {
	return Math.min(Math.floor(Math.random() * max) + offset, max - offset)
}

function setWindow(index) {
	bodyEl.style.top = `${-100 * index}vh`
}
