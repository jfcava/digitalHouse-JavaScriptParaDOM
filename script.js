


// Mandar una alerta al navegador
//alert("Esto es una alerta desde JavaScript");

// Hacer una pregunta obteniendo una respuesta
//let res = confirm("Hiciste los cursos anteriores");
//console.log(res);

// Pedir datos al usuario
//let datos = prompt("Que lenjuage te gusta mas?");
//console.log(datos);



// FOR-OF (Recorrer un Array)
let tecnologias = ['HTML', 'CSS', 'Javascript', 'ReactJS'];
let texto = '';

for( let i of tecnologias){
    texto += i + ", ";
}

//console.log(texto);


// FOR-IN (Recorrer un objeto)
let persona = { nombre: 'Juan', ocupacion: 'Camarografo', estudiante: true};
let textoPersona = '';

for (let x in persona){
    textoPersona += persona[x] + ", ";
}

//console.log(textoPersona);


// FOR-OF (Recorrermos un array de objetos)
let trabajadores = [
    { nombre: 'Carlos', area: 'tecnica', afiliado: false},
    { nombre: 'Valentin', area: 'tecnica', afiliado: true},
    { nombre: 'Josefina', area: 'limpieza', afiliado: false}
];

let textoTrabajadores = "";

for (let trab of trabajadores){
    textoTrabajadores += trab.afiliado + ", ";
}

//console.log(textoTrabajadores);


// Obtenemos elemento por ID y le agregamos HTML
document.getElementById('test').innerHTML = 'Este texto es desde JS';

document.getElementById('test2').style.color = 'blue';

document.getElementById('test3').setAttribute('class','naranjita');


// QUERY SELECTORS

let salutaciones = document.querySelectorAll('p,saludo'); // Devuelve un array

// Dentro de Salutaciones tomo el primer valor, y tomamos su innerHTML
document.getElementById('testQuery').innerHTML = "En este parrafo va el primero de los saludos: " + salutaciones[0].innerHTML;


// Selector de Formularios

const form = document.forms['form1']; //Array de inputs dentro del form
let text = '';

for (let i = 0; i < form.length; i++) {
    text += form.elements[i].value + '<br>';
}

document.getElementById('testForm').innerHTML = text;

// EVENTOS (Cambiamos el texto al hacer click)
const changeThisElement = (element) => element.innerHTML = "Hola Mundo!";


// Agregamos informacion con un boton

const displayDate = () => document.getElementById('testFecha').innerHTML = Date();

document.getElementById('btn').onclick = displayDate


// Evento al cargar la pagina y ver si las cookies estan habilitadas
const checkCookies = () => {
    let text = navigator.cookieEnabled ? 'Las cookies estan habilitadas' : 'Las cookies no estan habilitadas';
    document.getElementById('testCookies').innerHTML = text;
}


// Funcion para pasar a UpperCase un input

const upperCase = () => {
    const input = document.getElementById('inputName');
    input.value = input.value.toUpperCase();
}


// Funcion para cambiar texto cuando paso el mouse o lo dejo
const mouseOver = element => {
    element.innerHTML = 'Estas sobre el DIV'
}
const mouseOut = element => {
    element.innerHTML = 'Saliste del DIV'
}

// Funcion para cambiar de color al hacer foco en un input
const changeStyle = element => {
    element.style.background = 'aqua';
}

// ******** EVENTOS DE TECLADO **********

let key;

const keydown = ($event) => {
    key = $event.key;
    console.log(key);
    key = $event.getModifierState('Alt');
    document.getElementById('key').innerHTML = key ? 'Presionaste la tecla ALT' : '';
}


// ******* MANIPULANDO NODOS EN EL DOM *********

// Creando un nodo de parrafo
const paragraph = document.createElement('p');
// Creamos un elmento de texto
const node = document.createTextNode('Este es el contenido nuevo');
// Incorporamos el elemento de texto al nodo de parrafo
paragraph.appendChild(node);

// En la variable container tenemos el div
const container = document.getElementById('div-nodos');
const p1 = document.getElementById('p1-nodos');
// Agregamos el contenido nuevo ANTES que el p1 que teniamos antes
container.insertBefore(paragraph,p1);


// Eliminamos el p2
const p2 = document.getElementById('p2-nodos');
p2.remove();

// Eliminamos ahora el p1
container.removeChild(p1);

// Reemplazamos el p3 por el contenido nuevo
const p3 = document.getElementById('p3-nodos');
container.replaceChild(paragraph, p3); // Primer valor el elemento que reemplaza, y el segundo el elemento a reemplazar



// ******** AGREGAR O QUITAR CLASES *********

// Agregamos una clase al DIV cuando presionamos un boton
const addClass = () => {
    // Tomamos el ClassList del elemento DIV
    const divClassList = document.getElementById('div-agregarClase').classList;
    // Agregamos una clase a elemento
    divClassList.add('red-background');
}


// Remover una clase del elemento DIV
const removeClass = () => {
    document.getElementById('div-agregarClase').classList.remove('red-background');
}


// Agregamos y quitamos un estilo con el mismo boton mediante el Toggle
const toggleClass = () => {
    document.getElementById('div-intercambiarClase').classList.toggle('red-background');
}



// ********* AGREGAR O QUITAR ATRIBUTOS **********

const paragraph1 = document.getElementById('paragraph1')
const paragraph2 = document.getElementById('paragraph2')

let textop = paragraph1.getAttribute('class')
document.getElementById('atribute').innerHTML = textop