const imageFeedContainer = document.querySelector("[data-feed-container]")

const api_url = "https://source.unsplash.com/random/"
const amountOfPictures = 9
setUpFeed()
async function setUpFeed() {
	imageFeedContainer.innerHTML = ""
	for (let i = 0; i < amountOfPictures; i++) {
		const image = document.createElement("div")
		image.classList.add("image-container")

		image.innerHTML = `<img src="${api_url}${getRandomSize()}" alt="">`

		imageFeedContainer.append(image)
	}
}

function getRandomSize() {
	return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
	return Math.floor(Math.random() * 10) + 300
}
