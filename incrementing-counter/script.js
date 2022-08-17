const counterNumbers = Array.from(document.querySelectorAll(".counter .number"))

const maxNumber = [12000, 5000, 7500]

loadNumbers()

function loadNumbers() {
	let percentage = 0
	const intervalId = setInterval(() => {
		percentage = updateNumbers(percentage)

		if (percentage > 100) clearInterval(intervalId)
	}, 10)
}

function updateNumbers(percentage) {
	counterNumbers.forEach((numberElement, index) => {
		numberElement.textContent = getNumberFromRangeByPercentage(
			percentage,
			0,
			maxNumber[index]
		)
	})

	percentage += 1

	return percentage
}

function getNumberFromRangeByPercentage(percentage, bottom, top) {
	return Math.round((percentage / 100) * (top - bottom) + bottom)
}
