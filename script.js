

const horse = document.getElementById('horse')
const human = document.getElementById('human')
const human2 = document.getElementById('human2')
const human3 = document.getElementById('human3')
const human4 = document.getElementById('human4')
const human5 = document.getElementById('human5')
const chariote = document.getElementById('chariote')
const avion = document.getElementById('avion')
const boat = document.getElementById('boat')
chariote.classList.add("marche");
horse.classList.add("marche");
const text1 = document.getElementById('text1')
let persoX = 0
let persocurrant = human
let decorX = 0
let tailleDuPas = 10
let oldPersoCurrent = human; //we save the perso. like that we can compare it later
	/*
	let perso = document.createElement("perso")
	    perso.style.left = stepX
	    perso.style.zIndex = 10000

	document.getElementById("container").appendChild(perso)
	*/
let decors = document.getElementById("decors")

document.addEventListener('keydown', (event) => {

	const isPersoOnTheMiddle = (persoX >= 512)
	const isPersoOnTheMiddleBackward = (persoX <= 512);

	if (event.keyCode == 37) {
		console.log("going backward");
		persoX -= tailleDuPas
		persocurrant.classList.add("flip");
		if (isPersoOnTheMiddleBackward) 
			decorX += tailleDuPas
	}
	
	else if (event.keyCode == 39) {
		console.log("going forward");
		persocurrant.classList.remove("flip");
		persoX+= tailleDuPas
		if (isPersoOnTheMiddle)
			decorX -= tailleDuPas
	} 

	if (decorX > 0) decorX = 0
	if (decorX < -8330) decorX = -8330
	if (persoX < 0) persoX = 0
	if (persoX > 512) persoX = 512
	if (persoX < 512 && decorX < 0) persoX = 512 //new, we check for backward movement now
	persocurrant.classList.add("marche");

	if (decorX> -2840)
		persocurrant = human
	if (decorX< -2780)
		persocurrant = human2
	if (decorX< -4810 )
		persocurrant = human3
	if (decorX< -5900 )
		persocurrant = human4
	if (decorX< -6900 )
		persocurrant = human5
	if (!isPersoOnTheMiddle)
		persocurrant.style.left = persoX + "px"

	// check if we switch perso, if we do it, we hide the previous perso, and display the new one walking
	if (oldPersoCurrent !== persocurrant) {
		oldPersoCurrent.style.display = 'none'
		oldPersoCurrent = persocurrant
		persocurrant.style.display = 'block'
		persocurrant.style.left = persoX + "px"
		persocurrant.classList.add("marche")
	}
	
	decors.style.left = decorX + "px"
	
	if (decorX <= -6760) {
		text1.classList.add('ouvre')
	} else {
		text1.classList.remove('ouvre')
	}
	
})


document.addEventListener('keyup', (event) => {
	if (event.keyCode == 37) {
		console.log("keyup backward");
	} else if (event.keyCode == 39) {
		console.log("keyup forward");
	} else {}
	persocurrant.classList.remove("marche");
	
	
	console.log("decor: " + decorX + " perso : " + persoX)

})