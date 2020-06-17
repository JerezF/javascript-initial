(function(){

	//Los eventos, son acciones que se van a ejecutar cuando el usuario hace algo


	//modelo de eventos standar

	var boton = document.getElementById('btn');

	//se puede crear una funcion dentro
	//o solo nombrar una funcion, pero sin parametros

	var saludo = function(){
		alert("Saludos");
	}	
	var saludo2 = function(){
		alert("fkasfnasñkfln");
	}


	boton.addEventListener("click", saludo);
	boton.addEventListener("click", saludo2);


	//remover el evento

	boton.removeEventListener("click", saludo2);

	//conocer el tipo de evento que estamos ejecutando

	var saludo = function(e){
		console.log('Este evento es de tipo: ' + e.type);
	}


}())