import { getMinutes, getHours, getSeconds, format } from "date-fns"

const btn = document.querySelector("[data-mode-btn]")
const body = document.querySelector("body")

btn.addEventListener("click", (e) => {
	body.classList.toggle("dark")
	if (body.classList.contains("dark")) {
		btn.textContent = "Light mode"
	} else {
		btn.textContent = "Dark mode"
	}
})

const secondsLine = document.querySelector("[data-seconds]")
const minutesLine = document.querySelector("[data-minutes]")
const hoursLine = document.querySelector("[data-hours]")

const digitalClock = document.querySelector("[data-digital]")

const weekDay = document.querySelector("[data-week-day]")
const monthDay = document.querySelector("[data-month-day]")
const month = document.querySelector("[data-month]")

setInterval(() => {
	const time = new Date()

	setMechanic(time)
	setDigital(time)
	setDate(time)
}, 1000)

function setMechanic(time) {
	hoursLine.style.setProperty(
		"transform",
		`rotate(${getAngle(getHours(time) % 12, 12)}deg)`
	)
	minutesLine.style.setProperty(
		"transform",
		`rotate(${getAngle(getMinutes(time), 60)}deg)`
	)
	secondsLine.style.setProperty(
		"transform",
		`rotate(${getAngle(getSeconds(time), 60)}deg)`
	)
}

function setDigital(time) {
	digitalClock.textContent = format(time, "p")
}

function setDate(time) {
	weekDay.textContent = format(time, "eeee")
	monthDay.textContent = format(time, "d")
	month.textContent = format(time, "LLL")
}

function getAngle(amount, max) {
	return (amount / max) * 360 - 90
}
