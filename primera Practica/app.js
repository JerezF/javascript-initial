//creando funcion para onclick del input

var zoom = function(){
	//esta funcion va a ejecutar el cambio de tamaño

	var thumb = document.getElementById("thumb");

	// thumb.setAttribute("class", "thumb grande");

	if (thumb.className == "thumb") {
		thumb.className = "thumb grande";
	}
	else {
		thumb.className = "thumb";
	}
}

