// //examinando el DOM
// //console.dir(document);
// //editar un elemento para verlo en la consola

// /*console.log(document.title);
// document.title = 'Prueba';
// console.log(document.title);*/


// //la propiedad .all muestra todos los objetos que componen este documento
// //console.log(document.all);

// //explorar todo el elemento
// console.log(document.all[10]);

// //aceder al formulario

// console.log(document.forms)

// //getElementsById

// var headerTitle = document.getElementById('header-title'),
// 	header = document.getElementById('main-header');

// //console.log(header)
// // el .textContent es el contenido de ese elemento
// headerTitle.textContent = 'Hola';

// //
// headerTitle.innerText = 'Adios';

// // se le usa elementos de html
// headerTitle.innerHTML = '<h3>Prueba</h3>'


//querySelector busca al primer elemento0

var header = document.querySelector('#main-header');

header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
