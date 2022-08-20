const notificationContainer = document.querySelector(
	"[data-notification-container]"
)
const btnShow = document.querySelector("[data-btn-show]")

const statuses = ["danger", "success", "info", "default"]
const messages = ["message one", "message two", "message three", "message four"]

btnShow.addEventListener("click", (e) => {
	const status = getRandomStatus()
	const message = getRandomMessage()
	addNotification(status, message)
})

const getRandomStatus = () => {
	return statuses[getRandomNumber(statuses.length - 1)]
}
const getRandomMessage = () => {
	return messages[getRandomNumber(messages.length - 1)]
}

const getRandomNumber = (max) => {
	return Math.floor(Math.random() * (max + 0.9))
}

const addNotification = (status, message) => {
	const notifElement = document.createElement("div")
	notifElement.classList.add("notification")
	notifElement.classList.add(`notification-${status}`)
	notifElement.textContent = message

	notificationContainer.append(notifElement)

	setTimeout(() => {
		notifElement.remove()
	}, 3000)
}
