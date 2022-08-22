const goodCheckbox = document.querySelector("[data-good]")
const cheapCheckbox = document.querySelector("[data-cheap]")
const fastCheckbox = document.querySelector("[data-fast]")
const toggles = document.querySelectorAll('.choice input[type="checkbox"]')

toggles.forEach((toggle) => {
	toggle.addEventListener("change", (e) => {
		calculateSettings(e.target)
	})
})

function calculateSettings(clickedToggle) {
	if (fastCheckbox.checked && cheapCheckbox.checked && goodCheckbox.checked) {
		if (goodCheckbox === clickedToggle) {
			fastCheckbox.checked = false
		}
		if (fastCheckbox === clickedToggle) {
			goodCheckbox.checked = false
		}
		if (cheapCheckbox === clickedToggle) {
			fastCheckbox.checked = false
		}
	}
}
