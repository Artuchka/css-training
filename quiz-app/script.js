const questionSubmitBtns = document.querySelectorAll(
	".question-container button.btn"
)
const questionContainers = document.querySelectorAll(".question-container")
const amountOfQuestionsEl = document.querySelector("[data-question-amount]")
const amountCorrectAnsweredEl = document.querySelector(
	"[data-correct-answered]"
)

const resultSubmitBtn = document.querySelector(".result-container .btn")

import data from "./data.json" assert { type: "json" }

let checkedAnswers = []
let correctAnswers = data.correctAnswers

setFirstActiveQuestion()

resultSubmitBtn.addEventListener("click", (e) => {
	checkedAnswers = []
	hideResultContainer()
	setFirstActiveQuestion()
})

questionSubmitBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		if (btn.classList.contains("btn-inactive")) return

		addCheckedAnswer()
		const res = showNextQuestion()
		hideCurrentQuestion()
		if (res === "reached end") {
			showResults()
		}
	})
})

questionContainers.forEach((container) => {
	container.addEventListener("click", (e) => {
		if (!e.target.matches('input[type="radio"]')) return

		getActiveQuestionBtn().classList.remove("btn-inactive")
	})
})

function setFirstActiveQuestion() {
	document.querySelector(".question-container").classList.add("active")
}
function hideResultContainer() {
	document
		.querySelector(".result-container.active")
		.classList.remove("active")
}

function addCheckedAnswer() {
	const answer = getActiveQuestionRadios().reduce((sum, cur) => {
		if (cur.checked == false) return sum
		return cur.value + sum
	}, "")

	checkedAnswers = addElement(checkedAnswers, answer)
}

function hideCurrentQuestion() {
	document
		.querySelector(".question-container.active")
		.classList.remove("active")
}

function showNextQuestion() {
	const nextEl = document.querySelector(
		".question-container.active + .question-container"
	)

	if (nextEl === null) return "reached end"
	nextEl.classList.add("active")
	return true
}

function showResults() {
	amountCorrectAnsweredEl.textContent = checkedAnswers.reduce(
		(cnt, ans, index) => {
			debugger
			console.log(ans, " AND ", correctAnswers[index])
			console.log(ans === correctAnswers[index])
			if (ans === correctAnswers[index]) return cnt + 1
			return cnt
		},
		0
	)
	amountOfQuestionsEl.textContent = correctAnswers.length

	document.querySelector(".result-container").classList.add("active")
}

function addElement(arr, newEl) {
	return [...arr, newEl]
}

function getActiveQuestionRadios() {
	return Array.from(
		document.querySelectorAll(
			'.question-container.active  input[type="radio"]'
		)
	)
}

function getActiveQuestionBtn() {
	return document.querySelector(".question-container.active .btn")
}
