import { times } from "lodash/fp"

const chooseGlassContainerElement = document.getElementById(
	"chooseGlassContainer"
)
const remainedElement = document.getElementById("remained")
const doneElement = document.getElementById("done")
const goalElement = document.getElementById("goal")
const goalVolume = 4
const choiceGlassVolume = 0.5

zeroState()

chooseGlassContainerElement.addEventListener("click", (e) => {
	if (!e.target.matches(".choose-glass")) return

	let number = parseInt(e.target.dataset.index) + 1
	if (e.target.matches(".choose-glass.active")) number--

	const glassesAmount = e.target.parentNode.children.length
	const percentage = Math.round((number / glassesAmount) * 100)

	removeActiveClass()
	setActiveClassTill(number)
	setRemained(100 - percentage)
	setDone(percentage)
})

function removeActiveClass() {
	const glasses = chooseGlassContainerElement.querySelectorAll(".choose-glass")
	glasses.forEach((glass) => {
		glass.classList.remove("active")
	})
}

function setActiveClassTill(endIndex) {
	const glasses = chooseGlassContainerElement.querySelectorAll(".choose-glass")
	times((index) => {
		glasses[index].classList.add("active")
	}, endIndex)
}

function zeroState() {
	chooseGlassContainerElement.textContent = ""
	setGoal(goalVolume)

	setRemained(100)
	setDone(0)

	createChooseGlasses(goalVolume, choiceGlassVolume)
}

function createChooseGlasses(goalVolume, choiceGlassVolume) {
	const amounOfGlasses = goalVolume / choiceGlassVolume
	times((index) => {
		addChooseGlass(choiceGlassVolume, index)
	}, amounOfGlasses)
}

function addChooseGlass(choiceGlassVolume, index) {
	const element = document.createElement("div")
	element.classList.add("choose-glass")
	element.textContent = choiceGlassVolume + " L"
	element.dataset.index = index

	chooseGlassContainerElement.append(element)
}

function setRemained(percentage) {
	remainedElement.style.height =
		getNumberFromRangeByPercentage(percentage, 0, 400) + "px"

	remainedElement.textContent = getLitersRemained(percentage, goalVolume)

	if (percentage == 0) {
		remainedElement.style.display = "none"
	} else {
		remainedElement.style.display = "flex"
	}
}

function setDone(percentage) {
	doneElement.style.height =
		getNumberFromRangeByPercentage(percentage, 0, 400) + "px"

	doneElement.textContent = percentage + "%"
}

function setGoal(value) {
	goalElement.innerHTML = ""
	goalElement.textContent = value + "L"
}

function getNumberFromRangeByPercentage(percentage, bottom, top) {
	return Math.round((percentage / 100) * (top - bottom) + bottom)
}

function getLitersRemained(percentage, goal) {
	return ((percentage / 100) * goal).toFixed(2)
}
