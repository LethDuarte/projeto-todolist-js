var nota = document.getElementById('itexto').value;
//var paragrafo = document.getElementsByClassName('itemarq');

function criarNota(){
    var nota = document.getElementById('itexto').value;
    var paragrafo = document.getElementById('arquivo');
    var arquivo = [];

    arquivo.push(nota);

    paragrafo.innerHTML = "passa nada" + arquivo[0];

    console.log(arquivo);
}