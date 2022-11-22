var nota = document.getElementById('itexto').value;
var paragrafo = document.getElementsByClassName('itemarq').toString();

function criarNota(){
    paragrafo.innerHTML = " ";
    console.log(typeof nota);
    console.log(typeof paragrafo);
}