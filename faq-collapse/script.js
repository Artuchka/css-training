const wrapper = document.querySelector("#wrapper")

wrapper.addEventListener("click", (e) => {
	if (!e.target.matches("img.close") && !e.target.matches("img.open")) return

	const tile = e.target.parentNode.parentNode

	tile.classList.toggle("open")
})
