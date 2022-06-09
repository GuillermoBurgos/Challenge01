const inputTexto=document.querySelector(".input_text");
const mensaje=document.querySelector(".input_text_area");


function btnEncriptar(){
    const textoEncriptado=encriptar(inputTexto.value);
    mensaje.value=textoEncriptado;
   document.getElementById("muneco").style.display="none";
    document.getElementById("copiar").style.display="unset";
    document.getElementById("areaD").style.display="unset";
}

function encriptar(textoParaEncriptar){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoParaEncriptar=textoParaEncriptar.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(textoParaEncriptar.includes(matrizCodigo[i][0])){
            textoParaEncriptar=textoParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textoParaEncriptar;
}

function btnDesencriptar(){
    const textoDesencriptado=desencriptar(inputTexto.value);
    mensaje.value=textoDesencriptado;
}

function desencriptar(textoParaDesencriptar){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoParaDesencriptar=textoParaDesencriptar.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(textoParaDesencriptar.includes(matrizCodigo[i][1])){
            textoParaDesencriptar=textoParaDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return textoParaDesencriptar;
}

function btnCopiar(){
    let copyText = mensaje;
    copyText.select();
    document.execCommand("copy");
}