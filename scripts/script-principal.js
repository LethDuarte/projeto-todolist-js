var nota = document.getElementById('itexto').value;
//var paragrafo = document.getElementsByClassName('itemarq');
var arquivo = [];

function criarNota(){
    var nota = document.getElementById('itexto');
    //var paragrafo = document.getElementById('itemarq');
    var elementoPai = document.getElementById('arquivo');
    var novoParagrafo = document.createElement('p');

    arquivo.push(nota.value);

    for(let item of arquivo){
        elementoPai.appendChild(novoParagrafo);
        novoParagrafo.className = 'itemarq';
        novoParagrafo.innerHTML = item;
    }
    

    //paragrafo.innerHTML = arquivo;

    console.log(arquivo);
}

// function criarElemento(){
//     var elementoPai = document.getElementById('arquivo');
//     var novoParagrafo = document.createElement('p');

//     for(i=0; i++; i<arquivo.length){
//         var texto = document.createTextNode(arquivo[i]);
//         elementoPai.appendChild(novoParagrafo);
//         novoParagrafo.appendChild(texto);
//     }
// }