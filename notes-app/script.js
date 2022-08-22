const addNoteBtn = document.querySelector("[data-add-note]")
const notesContainer = document.querySelector("[data-notes-container]")
const noteTemplate = document.querySelector("#noteTemplate")

restoreNotes()

addNoteBtn.addEventListener("click", (e) => {
	addNote()
	saveNotes()
})

function addNote({ stateDisabled = false, textValue = "" } = {}) {
	const noteEl = noteTemplate.content.cloneNode(true)

	const noteTextEl = noteEl.querySelector("[data-text]")
	noteTextEl.disabled = stateDisabled
	noteTextEl.value = textValue
	noteEl.querySelector("[data-edit]").addEventListener("click", (e) => {
		noteTextEl.disabled = !noteTextEl.disabled
		saveNotes()
	})
	noteEl.querySelector("[data-remove]").addEventListener("click", (e) => {
		e.target.parentNode.parentNode.parentNode.remove()
		saveNotes()
	})

	noteTextEl.addEventListener("input", saveNotes)

	notesContainer.append(noteEl)
}

function saveNotes() {
	const notesInfo = Array.from(
		document.querySelectorAll(".notes-container > .note")
	).map((note) => {
		const noteTextEl = note.querySelector("[data-text]")
		return {
			text: noteTextEl.value,
			disabled: noteTextEl.disabled,
		}
	})

	localStorage.setItem("notes", JSON.stringify(notesInfo))
}

function restoreNotes() {
	const notesInfo = JSON.parse(localStorage.getItem("notes"))

	notesInfo.forEach(({ text, disabled }) => {
		addNote({
			textValue: text,
			stateDisabled: disabled,
		})
	})
}
