const horse = document.getElementById('horse')
const human = document.getElementById('human')
const human2 = document.getElementById('human2')
const chariote = document.getElementById('chariote')

let stepX = 0
let decorX = 0
let tailleDuPas = 15
	/*
	let perso = document.createElement("perso")
	    perso.style.left = stepX
	    perso.style.zIndex = 10000

	document.getElementById("container").appendChild(perso)
	*/
let decors = document.getElementById("decors")

document.addEventListener('keydown', (event) => {

	const isPersoOnTheMiddle = (stepX == 512)

	if (event.keyCode == 37) {
		console.log("going backward");
		stepX -= tailleDuPas
		if (!human.classList.contains("flip")) {
			human.classList.add("flip");
		if (!human2.classList.contains("flip")) {
			human2.classList.add("flip");
		} else {}
		decorX += tailleDuPas
	} else if (event.keyCode == 39) {
		console.log("going forward");
		if (human.classList.contains("flip")) {
			human.classList.remove("flip");
		if (human2.classList.contains("flip")) {
			human2.classList.remove("flip");
		} else {}

		// stepX = stepX + 1
		// stepX++ (incrémenter)
		stepX += tailleDuPas
		if (isPersoOnTheMiddle)
			decorX -= tailleDuPas
	} else {}

	if (stepX < 0) stepX = 0
	if (stepX > 512) stepX = 512
	if (decorX > 0) decorX = 0
	human.classList.add("marche");
	human.style.left = stepX + "px"
	human2.classList.add("marche");
	human2.style.left = stepX + "px"
		/*
			if (stepX >= 300) {
				intro.classList.add('ouvre')
			} else {
				intro.classList.remove('ouvre')
			}
		*/
})


document.addEventListener('keyup', (event) => {
	if (event.keyCode == 37) {
		console.log("keyup backward");
	} else if (event.keyCode == 39) {
		console.log("keyup forward");
	} else {}
	human.classList.remove("marche");
	human.classList.add("human0");
	human2.classList.remove("marche");
	human2.classList.add("human0")
})
