const form = document.querySelector("[data-form]")
const passTextElement = document.querySelector("[data-pass-text]")
const hasLowercaseCheckbox = document.querySelector("[data-lowercase]")
const hasUppercaseCheckbox = document.querySelector("[data-uppercase]")
const hasNumbersCheckbox = document.querySelector("[data-numbers]")
const hasSymbolsCheckbox = document.querySelector("[data-symbols]")
const lenInput = document.querySelector("[data-len]")

const uppercaseAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
const numbersAlphabet = "1234567890".split("")
const symbolsAlphabet = "!@#$%^&*()_?\"'{}|\\/+`~<>.,".split("")

form.addEventListener("submit", (e) => {
	e.preventDefault()

	const options = {
		len: parseInt(lenInput.value),
		uppercase: hasUppercaseCheckbox.checked,
		lowercase: hasLowercaseCheckbox.checked,
		numbers: hasNumbersCheckbox.checked,
		symbols: hasSymbolsCheckbox.checked,
	}

	passTextElement.textContent = generatePassword(options)
})

function generatePassword({ len, uppercase, lowercase, numbers, symbols }) {
	if (!uppercase && !lowercase && !numbers && !symbols)
		return "Plese check at least one checkbox"
	let alphabet = ""
	let pass = ""
	if (uppercase) {
		alphabet = extend(alphabet, uppercaseAlphabet)
	}
	if (lowercase) {
		alphabet = extend(alphabet, lowercaseAlphabet)
	}
	if (numbers) {
		alphabet = extend(alphabet, numbersAlphabet)
	}
	if (symbols) {
		alphabet = extend(alphabet, symbolsAlphabet)
	}

	const alphabetLen = alphabet.length
	for (let i = 0; i < len; i++) {
		pass += alphabet[getRandom(alphabetLen - 1)]
	}

	return pass
}

function extend(curr, add) {
	return [...curr, ...add]
}

function getRandom(max) {
	return Math.floor(Math.random() * (max + 0.9))
}
