const todoContainer = document.querySelector("[data-todo-container]")

const inputEl = document.querySelector("[data-todo-input]")

restoreTodos()

inputEl.addEventListener("keypress", function (e) {
	if (e.key !== "Enter" || this.value === "") return

	const todoText = this.value
	this.value = ""

	appendNewTodo(todoText)
})

todoContainer.addEventListener("click", (e) => {
	if (!e.target.matches(".todo")) return

	e.target.classList.toggle("todo-done")
	saveChanges()
})

todoContainer.addEventListener("contextmenu", (e) => {
	if (!e.target.matches(".todo")) return

	e.preventDefault()

	e.target.remove()
	saveChanges()
})

function appendNewTodo(text, { state = "false" } = {}) {
	const todoEl = document.createElement("div")
	todoEl.classList.add("todo")
	if (state == true) {
		todoEl.classList.add("todo-done")
	}
	todoEl.textContent = text
	todoContainer.appendChild(todoEl)
	saveChanges()
}

function saveChanges() {
	const todoEls = Array.from(document.querySelectorAll(".todo"))

	const saveInfo = todoEls.map((el) => {
		return {
			text: el.textContent,
			isDone: el.classList.contains("todo-done"),
		}
	})

	localStorage.setItem("todos", JSON.stringify(saveInfo))
}

function restoreTodos() {
	const todoInfos = JSON.parse(localStorage.getItem("todos")) || []

	todoInfos.forEach(({ text, isDone }) => {
		appendNewTodo(text, { state: isDone })
	})
}
