import { open, setMobileSize } from "./script.js"

const homeBtn = document.querySelector("[data-home-btn]")
const workBtn = document.querySelector("[data-work-btn]")
const blogBtn = document.querySelector("[data-blog-btn]")
const aboutBtn = document.querySelector("[data-about-btn]")

const mobileHeight = 650
const mobileWidth = 400

setMobileSize({ mobileHeight, mobileWidth })
open("home")

homeBtn.addEventListener("click", (e) => {
	open("home")
})
workBtn.addEventListener("click", (e) => {
	open("work")
})
blogBtn.addEventListener("click", (e) => {
	open("blog")
})
aboutBtn.addEventListener("click", (e) => {
	open("about")
})
