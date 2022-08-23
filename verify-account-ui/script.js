const inputs = document.querySelectorAll(".input")
inputs.forEach((inp, index) => {
	// const res = inp.setAttribute("maxlength", 1)
	inp.addEventListener("input", (e) => {
		console.log(e)
		if (e.data === null) return
		console.log(e)
		inp.value = e.data
		inputs[Math.min(index + 1, inputs.length - 1)].focus()
	})
})
