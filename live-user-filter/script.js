const listEl = document.querySelector("[data-list]")
const inputEl = document.querySelector("[data-filter-input]")

const api_url = "https://random-data-api.com/api/v2/users"
const peopleAmount = 10
const users = []
addPeople()

inputEl.addEventListener("input", (e) => {
	const searchValue = inputEl.value.toLowerCase()

	const filteredUsers = getFilteredUsers(searchValue)
	addPersonCards(filteredUsers)
})

function getFilteredUsers(searchValue) {
	return users.filter((user) => {
		return (
			user.name.toLowerCase().includes(searchValue) ||
			user.location.toLowerCase().includes(searchValue)
		)
	})
}

function addPersonCards(filteredArr) {
	listEl.innerHTML = ""
	filteredArr.forEach((info) => {
		addPersonCard(info)
	})
}

async function addPeople() {
	listEl.innerHTML = ""
	const promises = []
	for (let i = 0; i < peopleAmount; i++) {
		promises.push(getRandomUserDetails())
	}
	await Promise.all(promises).then((promises) => {
		promises.forEach((data) => {
			users.push(data)
			addPersonCard(data)
		})
	})
}

async function getRandomUserDetails() {
	const {
		first_name,
		last_name,
		address,
		avatar: avatarURL,
	} = await getRandomUser()

	const { city, country } = address

	const name = `${first_name} ${last_name}`
	const location = `${city}, ${country}`
	return {
		name,
		location,
		avatarURL,
	}
}

async function getRandomUser() {
	const res = await fetch(api_url)
	const data = await res.json()

	return data
}

getRandomUser()

function addPersonCard({ name, location, avatarURL }) {
	const personEl = document.createElement("li")
	personEl.classList.add("person")
	personEl.innerHTML = `
        <img src="${avatarURL}" alt="" class="person_avatar">
        <div class="person_info">
            <div class="info_name">${name}</div>
            <div class="info_location">${location}</div>
        </div>
    `

	listEl.append(personEl)
}
