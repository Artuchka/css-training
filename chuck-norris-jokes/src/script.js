const { default: axios } = require("axios")

const jokeButton = document.querySelector("#jokeButton")
const jokeElement = document.querySelector("#joke")
const jokeImage = document.querySelector("#jokeImage")

const api_url = "https://api.chucknorris.io/jokes/random"

jokeButton.addEventListener("click", setNewJoke)

async function setNewJoke() {
	const jokeData = await getJoke()
	handleJoke(jokeData)
}

async function getJoke() {
	return axios.get(api_url).then(({ data }) => {
		return data
	})
}

function handleJoke({ value: jokeText }) {
	setJokeText(jokeText)
}

function setJokeText(text) {
	jokeElement.textContent = text
}
