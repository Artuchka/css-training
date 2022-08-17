const labels = Array.from(document.querySelectorAll(".form label"))

labels.forEach((element) => {
	const spans = Array.from(element.textContent.trim()).map((char, index) => {
		return `<span style="transition-delay: ${index * 50}ms">${char}</span>`
	})
	element.innerHTML = ""
	spans.forEach((span) => {
		element.innerHTML += span
	})
})
