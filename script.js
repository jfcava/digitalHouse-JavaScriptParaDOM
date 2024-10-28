


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

// Si el paragraph1 tiene atributo muestra ese, si lo tiene el paragraph2 muestra ese
let textop = paragraph1.getAttribute('class') ? paragraph1.getAttribute('class') : paragraph2.getAttribute('class')
document.getElementById('atribute').innerHTML = textop

// Seteamos el valor de "value" del input
const inputNombre = document.getElementById('input-nombre')
inputNombre.setAttribute('value', 'Juan Cavallieri')

// Eliminamos el "value" del input
const inputNombre2 = document.getElementById('input-nombre2')
inputNombre2.removeAttribute('value')


// ********* AGREGAR O QUITAR ESTILOS **********

document.getElementById('p-styles').style.color = 'red'
document.getElementById('p-styles').style.backgroundColor = 'yellow'


// ********* BOM (Browser Object Model) **********

document.getElementById('screenh').innerHTML = screen.height
document.getElementById('screenw').innerHTML = screen.width

document.getElementById('screenc').innerHTML = screen.colorDepth + 'bits'

document.getElementById('url').innerHTML = location.href

document.getElementById('cookies').innerHTML = navigator.cookieEnabled ? 'Si' : 'No'

const historyBack = () => history.back()
const historyForward = () => history.forward()
const clickMe = () => open('https://www.digitalhouse.com')

document.getElementById('btn-Volver').addEventListener('click', historyBack)
document.getElementById('btn-Ir').addEventListener('click', historyForward)
document.getElementById('btn-Abrir').addEventListener('click', clickMe)


// ********* COOKIES **********

// De esta manera se agrega una cookie, clave - valor
document.cookie = 'username=Juan Cavallieri'


// ********* Browser Web API: Geolocalizacion **********

const ubicacion = document.getElementById('ubicacion');

const showPosition = position => {
    ubicacion.innerHTML = 'La latitud es: ' + position.coords.latitude + '<br>La longitud es: ' + position.coords.longitude;
}

const getLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        ubicacion.innerHTML = 'La geolocacion esta apagada'
    }
}



// ********* Browser Web API: Forms Validation **********

const doValidation = () => {
    const number = document.getElementById('number')
    document.getElementById('error').innerHTML = number.checkValidity() ? 'El numero esta correcto' : number.validationMessage
}


const goBack = () => window.history.back() // Nos permite ir hacia atras una sola vez
const goBackx2 = () => window.history.go(-2) // Nos permite ir 2 veces hacia atras
const goForward = () => window.history.forward() // Nos permite ir hacia adelante una sola vez
const goForwardx2 = () => window.history.go(2) // Nos permite ir 2 veces hacia adelante
 


// ********* LocalStorage **********

const firstname = document.getElementById('firstname-local')
const lastname = document.getElementById('lastname-local')
const job = document.getElementById('job-local')

document.getElementById('welcome').innerHTML = localStorage.getItem('userName') != '' ? 'Bienvenido ' + localStorage.getItem('userName') + '!!!' : '' 

const save = () => {
    localStorage.setItem('userName', firstname.value + ' ' + lastname.value)
    localStorage.setItem('job', job.value)
}

const removeLocalName = () => {
    localStorage.removeItem('userName')
}

const removeLocalAll = () => {
    localStorage.clear()
}


// ********* SessionStorage **********


const firstnameSession = document.getElementById('firstname-session')
const lastnameSession = document.getElementById('lastname-session')
const jobSession = document.getElementById('job-session')


const saveSession = () => {
    sessionStorage.setItem('userName', firstnameSession.value + ' ' + lastnameSession.value)
    sessionStorage.setItem('job', jobSession.value)
    document.getElementById('welcome-session').innerHTML = sessionStorage.getItem('userName') != null ? 'Bienvenido ' + sessionStorage.getItem('userName') + '!!!' : '' 
}

const removeSessionName = () => {
    sessionStorage.removeItem('userName')
}

const removeSessionAll = () => {
    sessionStorage.clear()
}


// ********* CONSOLA DEL NAVEGADOR **********

const object = { name: 'Juan Cavallieri', job: 'Developer'}
const array = [1,2,3,4]
const css = 'color: red; background: aqua; font-size:20px'
const css2 = 'color: green; background: aqua; font-size:20px'


// Concateno dos elementos, un string y la variable
console.log('Objeto', object)
console.log('Array', array)


// Con %c nos va a permitir modificar el texto
console.log('%cEste texto va a tener estilo', css)

console.log('%cEste texto va a tener un estilo y %ceste otro texto va a tener otro', css, css2)


// Console Assert, se muestra la informacion si la condicion es false
const aa = 5
const bb = 3

console.assert(aa+bb==11, 'No es igual a 11')

// Con console.clear() se borra todo en la consola

// Con console.count() cuento cuantos elementos tiene el array
for (let i = 0; i < array.length; i++) {
    console.count('Mi array tiene: ')    
}

// Nos muestra el mensaje en consola como un error
console.error('Este es un texto que sirve para mostrar en caso de que fuera un error')

// Nos muestra el mensaje en consola como una advertencia
console.warn('Se utiliza para dar una advertencia sin llegar a ser un error')

// Console.group para agrupar mensajes
console.log('Hola mundo')

console.group('Mensajes importantes agrupados') //Puedo usar console.groupCollapsed para que el grupo aparezca colapsado
console.log('Este es otro hola mundo')
console.log('Otro mensaje')
console.warn('Advertencia')
console.error('Error')
console.groupEnd()
console.log('Esto estara adentro?')

// Console.table para mostrar un array en formato tabla
console.table(array)

// Console.time para calcular el tiempo que se demora desde que comienza hasta que termina

console.time('Cuanto demora 2 bucles?')
for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 5000; j++) {
        
    }
}
console.timeEnd('Cuanto demora 2 bucles?')

// Console.trace para rastrear una accion en el codigo

const otroMetodo = () => {
    console.trace()
}

const miFuncionTrace = () => {
    otroMetodo()
}



// ********* TIMERS **********

const action = () => {
    setTimeout(() => {
        console.log('Esta accion es la del boton')
    }, 2000);
}

const action2 = () => {
    setInterval(() => {
        console.log('Esta accion sale del boton de intervalo')
    }, 2000);
}

const action3 = () => {
    const interval = setInterval(() => {
        console.log('Accion con intervalo')
    }, 1000);

    const timeOut = setTimeout(() => {
        console.log('Limpiamos el intervalo')
        clearInterval(interval)
    }, 10000);
}