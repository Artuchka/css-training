import axios from "axios"

const card = document.querySelector("[data-card]")
const notFoundContainer = document.querySelector("[data-not-found]")
const searchInput = document.querySelector("[data-search-input]")

const avatarImage = card.querySelector("[data-avatar-image]")
const profileName = card.querySelector("[data-profile-name]")
const statFollowers = card.querySelector("[data-stat-followers]")
const statFollowing = card.querySelector("[data-stat-following]")
const statRepos = card.querySelector("[data-stat-repos]")
const reposList = card.querySelector("[data-repos-list]")

const api_url = "https://api.github.com/users/"

searchInput.addEventListener("keypress", async (e) => {
	if (e.key !== "Enter") return

	hideContainers()
	const searchName = searchInput.value
	searchInput.value = ""

	const userData = await getUserData(searchName)
	if (userData === false) {
		showNotFound()
		return
	}

	showUser(userData)
})

async function getUserData(searchName) {
	let ret
	try {
		ret = await axios.get(api_url + searchName)
	} catch (e) {
		if (e?.response?.data?.message === "Not Found") return false
	}
	const { data } = ret

	console.log("data is ", data)
	const {
		followers,
		following,
		public_repos: reposAmount,
		name,
		avatar_url: imageUrl,
		repos_url: reposUrl,
	} = data

	const { data: reposData } = await axios.get(reposUrl)

	const reposArray = reposData.map((rep) => {
		const { name: repName, html_url: repUrl } = rep
		const repData = {}
		repData.name = repName
		repData.href = repUrl
		return repData
	})

	return {
		imageUrl,
		name,
		followers,
		following,
		reposAmount,
		reposArray,
	}
}

function showNotFound() {
	notFoundContainer.classList.add("active")
}
function hideContainers() {
	notFoundContainer.classList.remove("active")
	card.classList.remove("active")
}
function showUser({
	imageUrl,
	name,
	followers,
	following,
	reposAmount,
	reposArray,
}) {
	avatarImage.src = imageUrl
	profileName.textContent = name
	statFollowers.textContent = followers
	statFollowing.textContent = following
	statRepos.textContent = reposAmount

	reposList.innerHTML = ""
	reposArray.forEach((rep) => {
		const element = document.createElement("div")
		element.classList.add("repos-item")
		element.innerHTML = `<a href='${rep.href}' target="_blank">${rep.name}</a>`

		reposList.append(element)
	})

	card.classList.add("active")
}
