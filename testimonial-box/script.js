const testimonialContainer = document.querySelector(
	"[data-testimonials-container]"
)
let progressBarEl = document.querySelector("[data-progress-bar]")

const animationDuration = 3000

document
	.querySelector("body")
	.style.setProperty(
		"--animation-duration-progress-bar",
		`${animationDuration}ms`
	)

window.intervalId = null
let data

setTimeout(async () => {
	data = await getTestimonialData()
	setTimeout(() => {
		startInterval()
	}, 500)
}, 1)

window.addEventListener("keypress", (e) => {
	if (!e.code == "Space") return

	if (progressBarEl.style.animationPlayState === "paused") {
		progressBarEl.style.animationPlayState = "running"
		return
	}

	progressBarEl.style.animationPlayState = "paused"

	clearInterval(window.intervalId)
	window.intervalId = null
})

async function startInterval() {
	//
	clearInterval(window.intervalId)
	window.intervalId = setInterval(async () => {
		setNewTestimonial(data)
		data = await getTestimonialData()
	}, animationDuration)
}

async function getTestimonialData() {
	const { results: userData } = await (
		await fetch("https://randomuser.me/api/")
	).json()

	const personInfo = userData[0]
	const { picture } = personInfo

	const avatarURL = picture.thumbnail
	const { name: fullname } = personInfo
	const name = `${fullname.title} ${fullname.first} ${fullname.last}`
	const { email } = personInfo

	const { content: quote } = await (
		await fetch("https://api.quotable.io/random")
	).json()

	return {
		quote,
		name,
		avatarURL,
		email,
	}
}

function setNewTestimonial({ quote, name, avatarURL, email }) {
	if (window.intervalId === null) return
	const testimonialEl = document.createElement("div")
	testimonialEl.classList.add("testimonial-container")

	testimonialEl.innerHTML = `
    <div class="testimonial__progress-bar" data-progress-bar></div>
        <div class="testimonial__quote">${quote}</div>
        <div class="testimonial__author">
            <div class="author__avatar"><img src="${avatarURL}" alt=""></div>
            <div class="author__desc">
                <div class="desc__name">${name}</div>
                <div class="desc__profession">${email}</div>
            </div>
        </div>
    `

	testimonialContainer.innerHTML = ""
	testimonialContainer.append(testimonialEl)

	progressBarEl = testimonialEl.querySelector("[data-progress-bar]")
	progressBarEl.addEventListener("animationend", onAnimationEndProgressBar)
}
progressBarEl.addEventListener("animationend", onAnimationEndProgressBar)

function onAnimationEndProgressBar() {
	if (window.intervalId !== null) return
	startInterval()
	progressBarEl.style.animation = "blinking-progress-bar .5s infinite"
}
