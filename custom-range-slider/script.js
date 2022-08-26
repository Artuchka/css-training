const sliderRange = document.querySelector(".range-slider")
const outpute = document.querySelector("output")

calcOffsetTooltip({ target: sliderRange })
sliderRange.addEventListener("input", calcOffsetTooltip)

function calcOffsetTooltip({ target }) {
	const widthTrack = window
		.getComputedStyle(target, null)
		.getPropertyValue("width")
	const widthThumb = window
		.getComputedStyle(target, null)
		.getPropertyValue("--thumbSize")
	const widthOutput = window
		.getComputedStyle(target.parentNode.querySelector("output"), null)
		.getPropertyValue("width")
	const offsetX =
		(parseFloat(target.value) / parseFloat(target.max)) *
		(parseFloat(widthTrack) - parseFloat(widthThumb))
	outpute.style.left = `${offsetX}px`
}
