const navElement = document.querySelector("[data-nav]")

document.addEventListener("scroll", (e) => {
	const scrolled = document.documentElement.scrollTop
	const windowHeight = window.innerHeight

	if (scrolled > windowHeight / 2) {
		navElement.classList.add("scrolled")
	} else {
		navElement.classList.remove("scrolled")
	}
})
