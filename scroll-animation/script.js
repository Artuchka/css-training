const tiles = Array.from(document.querySelectorAll(".container"))

document.addEventListener("scroll", showVisible)

showVisible()

function showVisible() {
	const windowBottom = window.innerHeight

	tiles.forEach((tile) => {
		if (isVisible(tile, windowBottom)) {
			tile.classList.add("show")
		} else {
			tile.classList.remove("show")
		}
	})
}

function isVisible(element, windowBottom) {
	const rect = element.getBoundingClientRect()
	return rect.top < windowBottom
}

// function hiddenAll() {
// 	tiles.forEach((tile) => {
// 		tile.classList.remove("show")
// 	})
// }
