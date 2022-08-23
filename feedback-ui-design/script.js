const inputEls = Array.from(
	document.querySelectorAll(".choice input[type='checkbox']")
)
const choiceEls = Array.from(document.querySelectorAll(".choice"))
const formContainer = document.querySelector("#form")
const thankYouContainer = document.querySelector("#thankYou")
const feedbackResult = document.querySelector("#feedbackResult")

formContainer.addEventListener("submit", (e) => {
	e.preventDefault()
	console.log(123)
	hideForm()
	showThankYou()

	console.log(inputEls.filter((el) => el.checked))
	feedbackResult.textContent = inputEls.filter((el) => el.checked)[0].id
})

inputEls.forEach((el) => {
	el.addEventListener("click", (e) => {
		removeAllChecked()
		setChecked(e.target.id)
	})
})

function removeAllChecked() {
	choiceEls.forEach((el) => el.classList.remove("checked"))
	inputEls.forEach((el) => (el.checked = false))
}

function setChecked(id) {
	document.querySelector(`.choice-${id}`).classList.add("checked")
	inputEls.filter((el) => el.id == id)[0].checked = true
}

function hideForm() {
	formContainer.classList.remove("show")
}
function showThankYou() {
	thankYouContainer.classList.add("show")
}

inputEls[inputEls.length - 1].click()
