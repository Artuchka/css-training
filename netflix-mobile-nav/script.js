const openNavBtn = document.querySelector("[data-open-nav]")
const closeNavBtn = document.querySelector("[data-close-nav]")
const navEl = document.querySelector("[data-nav]")

openNavBtn.addEventListener("click", (e) => {
	navEl.classList.add("show")
})
closeNavBtn.addEventListener("click", (e) => {
	navEl.classList.remove("show")
})
