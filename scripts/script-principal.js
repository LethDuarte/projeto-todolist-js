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
    var novoBotao = document.createElement('button');

    for(let item of arquivo){
        elementoPai.appendChild(novoParagrafo);
        novoParagrafo.className = 'itemarq';
        novoParagrafo.innerHTML = item;
        elementoPai.appendChild(novoBotao);
        novoBotao.className = 'btn btn-primary btn-sm';
        novoBotao.textContent = 'Feito';
        novoBotao.addEventListener('click', function(){
            novoParagrafo.style.textDecoration = 'line-through';
        })
    }
}

function limparNota(){
    document.getElementById('itexto').value = " ";
}