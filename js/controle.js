let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;

function addTarefa() {
    let valorInput = input.value;

    if((valorInput !== "") || (valorInput !== null) || (valorInput !== undefined)) {

        contador++;

        let novoItem =  `<div id="${contador}" class="item d-flex col-12 justify-content-center align-items-center mb-2">
        <div onclick="marcarTarefa(${contador})" class="item-icone p-3 bg-white h-2">
            <i id="icone_${contador}" class="bi bi-circle"></i>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome p-3 bg-white h-2 w-50 text-truncate" id="nome_tarefa${contador}">
            ${valorInput}
        </div>

        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete btn btn-danger p-3 h-2"><i class="bi bi-trash-fill w-10"></i></button>
        </div>
    </div>`;

        main.innerHTML = main.innerHTML + novoItem;

        input.value = "";
        input.focus();

    }
}

input.addEventListener("keyup", function(event){
    if(event.key === "Enter") {
        event.preventDefault();
        btnAdd.click();
    }
})

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");

    if(classe == "item d-flex col-12 justify-content-center align-items-center mb-2") {
        item.classList.add("clicado");

        var icone = document.getElementById('icone_' + id);
        var nome = document.getElementById('nome_tarefa' + id);
        nome.classList.remove("bg-white");
        nome.classList.add("bg-success");
        icone.classList.remove("bi-circle");
        icone.classList.add("bi-check-circle-fill");
        icone.classList.add("text-success");

        item.parentNode.appendChild(item);
        
    }
    else {
        item.classList.remove("clicado");
        
        var icone = document.getElementById('icone_' + id);
        var nome = document.getElementById('nome_tarefa' + id);
        nome.classList.remove("bg-success");
        nome.classList.add("bg-white");
        icone.classList.remove("bi-check-circle-fill");
        icone.classList.add("bi-circle");
        icone.classList.remove("text-success");
    }
}