const textarea = document.querySelector("#textarea")
const choiceContainer = document.querySelector("#choiceContainer")

choiceContainer.innerHTML = ""
textarea.value = ""

textarea.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		textarea.value = ""
		chooseRandomChoice()
		return
	}
	choiceContainer.innerHTML = ""
	textarea.value
		.toString()
		.split(",")
		.forEach((choice, index) => {
			addChoice(choice.trim())
		})
})

function addChoice(choice) {
	if (choice == " " || choice == "" || choice === undefined) return

	const element = document.createElement("div")
	element.classList.add("choice-item")
	element.textContent = choice

	choiceContainer.appendChild(element)
}

function chooseRandomChoice() {
	const choices = Array.from(choiceContainer.querySelectorAll(".choice-item"))
	const amountOfChoices = choices.length

	const intervalId = setInterval(() => {
		uncolorAllChoices(choices)
		colorChoice(choices, randomNumber(amountOfChoices - 1))
	}, 100)

	setTimeout(() => {
		clearInterval(intervalId)
	}, amountOfChoices * 100)
}

function randomNumber(top) {
	return Math.floor(Math.random() * (top + 0.9))
}

function colorChoice(choicesArray, index) {
	choicesArray[index].classList.add("chosen")
}

function uncolorAllChoices(choicesArray) {
	choicesArray.forEach((choice) => {
		choice.classList.remove("chosen")
	})
}
