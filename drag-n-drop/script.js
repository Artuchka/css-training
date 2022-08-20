const box = document.querySelector("[data-box]")
const dropzones = document.querySelectorAll(".dropzone")

dropzones.forEach((dropzone) => {
	dropzone.addEventListener("dragover", dragOver)
	dropzone.addEventListener("dragenter", dragEnter)
	dropzone.addEventListener("dragleave", dragLeave)
	dropzone.addEventListener("drop", dragDrop)
})

box.addEventListener("dragstart", dragStart)
box.addEventListener("dragend", dragEnd)

function dragStart(e) {
	console.log("drag start")

	e.target.classList.add("dragging")
}
function dragEnd(e) {
	console.log("drag end")
	e.target.classList.remove("dragging")
}

function dragOver(e) {
	e.preventDefault()
	console.log("drag over")
}

function dragEnter(e) {
	console.log("drag enter")
	e.preventDefault()
	e.target.classList.add("dragover")
}

function dragLeave(e) {
	console.log("drag leave")
	e.preventDefault()
	e.target.classList.remove("dragover")
}

function dragDrop(e) {
	console.log("drag drop")
	e.target.classList = "dropzone"
	e.target.appendChild(box)
}
