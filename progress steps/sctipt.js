const btnNext = document.querySelector("#btnNext")
const btnPrev = document.querySelector("#btnPrev")
const steps = document.querySelectorAll(".step")

const amountOfSteps = 4
removeActiveClasses()

btnNext.addEventListener("click", () => {
	if (btnNext.classList.contains("btn-inactive")) return

	addLastActiveClass()

	if (getCount() == 4) {
		btnNext.classList.add("btn-inactive")
	}
	btnPrev.classList.remove("btn-inactive")
})

btnPrev.addEventListener("click", () => {
	if (btnPrev.classList.contains("btn-inactive")) return

	removeLastActiveClass()

	if (getCount() == 0) {
		btnPrev.classList.add("btn-inactive")
	}
	btnNext.classList.remove("btn-inactive")
})

function removeLastActiveClass() {
	let index = amountOfSteps - 1
	while (!steps[index].classList.contains("active") && index > 0) {
		index--
	}
	steps[index].classList.remove("active")
}

function addLastActiveClass() {
	let index = 0
	while (
		steps[index].classList.contains("active") &&
		index < amountOfSteps - 1
	) {
		index++
	}
	steps[index].classList.add("active")
}

function removeActiveClasses() {
	Array.from(steps).forEach((step) => {
		step.classList.remove("active")
	})
}

function getCount() {
	return Array.from(steps).reduce((sum, step) => {
		if (step.classList.contains("active")) return sum + 1
		return sum
	}, 0)
}
