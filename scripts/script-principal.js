var nota = document.getElementById('itexto').value;
var arquivo = [];

function criarNota(){
    var nota = document.getElementById('itexto');

    arquivo.push(nota.value);

    criarElemento();
    console.log(arquivo);
}

function criarElemento(){
    var elementoPai = document.getElementById('arquivo');
    var novoParagrafo = document.createElement('p');

    for(let item of arquivo){
        elementoPai.appendChild(novoParagrafo);
        novoParagrafo.className = 'itemarq';
        novoParagrafo.innerHTML = item;
        //novoParagrafo.addEventListener('click', marcarNota());
    }
}

function limparNota(){
    document.getElementById('itexto').value = " ";
}

// function marcarNota(){
//     var novoParagrafo = document.getElementsByTagName('p');
//     novoParagrafo.style.textDecoration = 'line-through';
// }