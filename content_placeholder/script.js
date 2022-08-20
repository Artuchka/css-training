const card = document.querySelector("[data-card]")

const poster = document.querySelector("[data-poster]")
const authorName = document.querySelector("[data-author-name]")
const authorDate = document.querySelector("[data-author-date]")
const authorAvatar = document.querySelector("[data-author-avatar]")
const cardText = document.querySelector("[data-card-text]")
const cardTitle = document.querySelector("[data-card-title]")

const animatedBgs = document.querySelectorAll(".animated-bg")

setTimeout(() => getData(), 2000)

function getData() {
	poster.innerHTML = '<img src="img/laptop" alt="">'
	authorName.innerHTML = "john doe"
	authorDate.innerHTML = "oct 08, 2020"
	authorAvatar.innerHTML = '<img src="img/avatar" alt="">'
	cardText.innerHTML = "Lorem ipsum dolor sit Lorem ipsum dolor sit amet."
	cardTitle.innerHTML = "Lorem, ipsum dolor"

	animatedBgs.forEach((bg) => {
		bg.classList.remove("animated-bg")
	})
}
