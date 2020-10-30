

"use strict"

// emojify returns the corresponding emoji image
function emojify(name) {
	var out = `<img src="images/` + name + `.jpg">`
	return out
}

Vue.component("swatch", {
	props: ["active", "swatch", "effect"],
	template: `
		<div class="grid-item">
			<div class="grid-cell--top" :style="effect(swatch)" >
				<span
					v-html="swatch.emoji"
					:class="{ bounce: swatch == active }"
				></span>
			</div>
			<div class="grid-cell--bottom" :style="{ color: swatch.color }">
				{{ swatch.color.toUpperCase() }}
			</div>
		</div>
	`
})

var app = new Vue({
	el: "#app",
	data: {
		active: "",
		swatches: [
		    { emoji: emojify("square" ), color: "#ff691f" },
		    { emoji: emojify("square" ), color: "#fab81e" },
		    { emoji: emojify("square" ), color: "#7fdbb6" },
		    { emoji: emojify("square" ), color: "#19cf86" },
		    { emoji: emojify("square" ), color: "#91d2fa" },
		    { emoji: emojify("square" ), color: "#1b95e0" },
		    { emoji: emojify("square" ), color: "#abb8c2" },
		    { emoji: emojify("square" ), color: "#e81c4f" },
		    { emoji: emojify("square" ), color: "#f58ea8" },
		    { emoji: emojify("square" ), color: "#981ceb" },
		    { emoji: emojify("square" ), color: "#ffffff" },
		    { emoji: emojify("square" ), color: "#000000" },
		],
	},
	methods: {
		// activate actives a swatch (emoji/color)
		activate: function (swatch) {
			this.active = swatch
		},
		// gradient returns a precomposed gradient
		gradient: function (swatch) {
			return {
				background: "linear-gradient(100deg, whitesmoke -100%, " + swatch.emoji + swatch.color+ ")",
			}
		}
	}
})

