const keyElememnt = document.querySelector("#eventKey #value")
const keyCodeElememnt = document.querySelector("#eventKeyCode #value")
const codeElememnt = document.querySelector("#eventCode #value")

document.documentElement.addEventListener("keypress", (e) => {
	setKey(e.key)
	setKeyCode(e.keyCode)
	setCode(e.code)
})

function setKey(text) {
	keyElememnt.textContent = text
}

function setKeyCode(text) {
	keyCodeElememnt.textContent = text
}

function setCode(text) {
	codeElememnt.textContent = text
}
