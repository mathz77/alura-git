function encriptar() {

    var frase = document.getElementById("textoEncriptado").value.toLowerCase(); // devuelve de mayuscula a minuscula.-

    // i = letras mayusculas y minusculas
    // m = multiples lineas
    // g = toma en cuenta toda la linea o la oracion
    
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show"; // al tocar el boton de encriptar, se habilita el boton de copiar.
    document.getElementById("botonCopiar").style.display = "inherit"; // oculta el boton copiar.

}