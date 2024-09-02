


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