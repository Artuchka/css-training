const canvas = document.getElementById("canvas")
const clearBtn = document.getElementById("clear")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const sizeSpan = document.getElementById("size")
const colorInput = document.getElementById("color")
const ctx = canvas.getContext("2d")

let size = 20
let color = "black"
let x
let y

clearBtn.addEventListener("click", (e) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
})

increaseBtn.addEventListener("click", (e) => {
	size = Math.min(50, size + 5)
	sizeSpan.textContent = size
})

decreaseBtn.addEventListener("click", (e) => {
	size = Math.max(5, size - 5)
	sizeSpan.textContent = size
})

colorInput.addEventListener("input", (e) => {
	color = e.target.value
})

function drawCircle(x, y) {
	ctx.beginPath()
	ctx.arc(x, y, size, 0, Math.PI * 2)
	ctx.fillStyle = color
	ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath()
	ctx.moveTo(x1, y1)
	ctx.lineTo(x2, y2)
	ctx.strokeStyle = color
	ctx.lineWidth = size * 2
	ctx.stroke()
}

canvas.onmousedown = (e) => {
	x = e.offsetX
	y = e.offsetY
	canvas.onmousemove = (e) => {
		const newX = e.offsetX
		const newY = e.offsetY

		drawLine(x, y, newX, newY)
		drawCircle(newX, newY)

		x = newX
		y = newY
	}
	canvas.onmouseup = (e) => {
		canvas.onmousemove = null
		canvas.onmouseup = null
	}
}
