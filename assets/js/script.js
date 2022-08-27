var mensaje = document.querySelector("#ingresar-mensaje");
var mensajeEncriptado = document.querySelector("#mensaje-desplegado");
document.querySelector("#btn-copiar").style.display = "none"; //Ocultamos el botón de copiar
document.querySelector("#mensaje-desplegado").style.display = "none";


function encriptar() {
    var palabras = mensaje.value; //Proceso para convertir input en minusculas
    var lowerC = palabras.toLowerCase();
    mensaje.value = lowerC; //Nuestro input convertido a minusculas

    var palabras = mensaje.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat"); //se añade función para no permitir acentos y remplazo de letras
    mensaje.value = palabras; //Resultado de remplazo de letras del valor que le asignamos

    mensajeEncriptado.value = palabras; //Pasamos el resultado al segundo textarea
    mensaje.value = ""; //Una vez enviado el resultado el primer textarea se vacia ("reinicia")
    document.querySelector("#btn-copiar").style.display = "initial"; //Mostramos el botón de copiar que ocultamos al principio
    document.querySelector("#mensaje-desplegado").style.display = "initial";
    document.querySelector(".ocultar").style.display = "none";
    document.querySelector(".ocultar2").style.display = "none";
    document.querySelector(".ocultar3").style.display = "none";
}

function desencriptar () {
    var palabras = mensaje.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    mensaje.value = palabras;

    mensajeEncriptado.value = palabras;
    mensaje.value = ""; 
}

function copiar() {
    var copia = document.querySelector("#mensaje-desplegado");
    copia.select();
    navigator.clipboard.writeText(copia.value);
}