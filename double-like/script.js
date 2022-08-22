const imageContainer = document.querySelector("[data-image-container]")

imageContainer.addEventListener("dblclick", (e) => {
	// preventing from incorrect heart-like position setting
	if (e.target.matches("img.heart")) return

	const heartElement = document.createElement("img")

	heartElement.classList.add("heart")
	heartElement.src = "img/heart.svg"
	console.log(e)
	heartElement.style.top = e.offsetY + "px"
	heartElement.style.left = e.offsetX + "px"

	imageContainer.append(heartElement)
	setTimeout(() => {
		heartElement.remove()
	}, 1000)
})
