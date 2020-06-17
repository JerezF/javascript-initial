// // Crear un elemento
// var elemento = document.createElement("h2");
// // Crear un nodo de texto
// var contenido = document.createTextNode("Este es nuestro titular");
// //Añadir el nodo al elemento de texto
// elemento.appendChild(contenido);
// //Agregarle atributos al elemento
// elemento.setAttribute("align", "center");
// //Agregar el elemento al documento
// document.getElementById("subtitulo").appendChild(elemento);




// ///AGREGANDO NODOS///

// var element = document.createElement("li"),
// 	content = document.createTextNode("Este es el agregado");

// element.appendChild(content);


// // var padre = document.getElementById("lista")
// var padre = document.getElementsByTagName("li")[0].parentNode;

// padre.appendChild(element);

//********************************
//para agregar al inicio, recibe dos parametros
//primero el nodo a agregar y el segundo
//nodo de referencia, un elemento hijo(antes de que queremos agregarlo)
	
// var primerElemento = document.getElementsByTagName("li")[0];

// padre.insertBefore(element, primerElemento); 

//**************************************

var primerElemento = document.getElementById("primero");

//aceder al texto que tiene adentro
//primera forma con .innerHTML 
// con .innerHTML se puede acceder a todo el codigo html
//si se usa una etiqueta html se ejecuta por ejemplo una <br>



// primerElemento.innerHTML = "nuevo texto"

//*****
//segunda forma (mejor) .textContent
// mas seguro a la hora de trabajar con formularios y demas

// primerElemento.textContent = "Ahora si";

//******
// // REMPLAZAR NODOS DEL DOM

// var elemento = document.createElement("li"),
// 	contenido = document.createTextNode("Nuevo Texto");

// elemento.appendChild(contenido);

// var padre = document.getElementById("primero").parentNode;
// 	referencia = document.getElementById("primero");


// // el primero es el que queremos agregar, y 
// //el segundo es el que queremos remplazar/eliminar

// padre.replaceChild(elemento, referencia);

//****************
//Eliminar nodos del DOM

// var elemento = document.createElement("li"),
// 	contenido = document.createTextNode("Nuevo Texto");

// 	elemento.appendChild(contenido);

// var padre = document.getElementById("primero").parentNode,
// 	referencia = document.getElementById("primero");
// //recibve un parametro del elemento que deseamos eliminar
// padre.removeChild(referencia);


// ACCESOS A LOS ATRIBUTOS DE los elementos dentro DOM

// var elemento = document.createElement("div"),
// 	padre = document.getElementById("contenedor"),
// 	referencia = document.getElementsByTagName("div")[0];

// //para los stylos se usa el .setAttribute("nombreDelAtributo", "nombre del style css");
// elemento.setAttribute("class", "azul");

// padre.insertBefore(elemento, referencia);

//**************

//Modificando el estilo de los elementos


// agregar variable llamada encabezado

var encabezado = document.getElementById("encabezado");

//agregar estilos dinamicamente con JS

//acceder a encabezado

encabezado.style.color = "navy";

//eliminar clases 

// encabezado.className = encabezado.className.replace("tituloGrande"," ");
