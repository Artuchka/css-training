export function open(selector) {
	removeAllActive()
	setActive(selector)
}

export function setMobileSize({ mobileHeight, mobileWidth }) {
	const body = document.querySelector("body")

	body.style.setProperty("--mobileHeight", `${mobileHeight}px`)
	body.style.setProperty("--mobileWidth", `${mobileWidth}px`)
}

function setActive(selector) {
	document
		.querySelector(`[data-${selector}-image-container]`)
		.classList.add("active")
	document.querySelector(`[data-${selector}-btn]`).classList.add("active")
}

function removeAllActive() {
	Array.from(document.querySelectorAll(`.image-container`)).forEach((toggle) =>
		toggle.classList.remove("active")
	)

	Array.from(document.querySelectorAll(`.nav-list a`)).forEach((toggle) =>
		toggle.classList.remove("active")
	)
}
