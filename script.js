alert("bienvenue sur le site de la Nexo-Corp")


function foncEntre(){
	document.querySelector("#maDiv").classList.remove("blanc");
	document.querySelector("#maDiv").classList.add("rouge");
}
function foncQuitte() {
	document.querySelector("#maDiv").classList.remove("rouge");
	document.querySelector("#maDiv").classList.add("blanc");
}


function on(){
	document.querySelector("#laDiv").classList.remove("gris");
	document.querySelector("#laDiv").classList.add("vert");
}
function off() {
	document.querySelector("#laDiv").classList.remove("vert");
	document.querySelector("#laDiv").classList.add("gris");
}

function lol() {
	document.querySelector("#laDiv").classList.add("non");
}
