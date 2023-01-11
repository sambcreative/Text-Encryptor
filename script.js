
function desencriptarFuncion(){
    let str = document.getElementById("txt").value;
    let acentos = /[ÁÉÍÓÚÑáéíóúñ]/
    if (acentos.test(str)){
        alert("El mensaje contiene acentos o la letra ñ");
    } else if (str=="") {
        alert("El mensaje esta vacio");
    } else {
        let str1 = str.replace(/ufat/g,"u");
        let str2 = str1.replace(/ober/g,"o");
        let str3 = str2.replace(/ai/g,"a");
        let str4 = str3.replace(/imes/g,"i");
        let str5 = str4.replace(/enter/g,"e");
        document.getElementById("txt2").innerHTML = str5;
        document.getElementById("copiar").style.display = "block";
        document.getElementById("nomensaje-container").style.display = "none";
    }
  
}

function encriptarFuncion(){
    let str = document.getElementById("txt").value;
    let acentos = /[ÁÉÍÓÚÑáéíóúñ]/
    if (acentos.test(str)){
        alert("El mensaje contiene acentos o la letra ñ");
    } else if (str=="") {
        alert("El mensaje esta vacio");
    } else {
    let str1 = str.replace(/e/g,"enter");
    let str2 = str1.replace(/i/g,"imes");
    let str3 = str2.replace(/a/g,"ai");
    let str4 = str3.replace(/o/g,"ober");
    let str5 = str4.replace(/u/g,"ufat");
    document.getElementById("txt2").innerHTML = str5;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("nomensaje-container").style.display = "none";
    }
}

function copiarFuncion(){
  let copyText = document.getElementById("txt2").textContent;
  navigator.clipboard.writeText(copyText);
  alert("El mensaje fue copiado");
  }

function letrachica(str){
    str.value= str.value.toLowerCase();
}  
  