let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");

let main = document.getElementById("areaLista");

let contador = 0

function addTarefa(){
    let valorInput = input.value;

    contador += 1;

    console.log(contador)
 
    if((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)){
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="selecionaTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="selecionaTarefa(${contador})" class="item-nome">
            <p>${valorInput}</p>
        </div>
        <div class="item-botao">
            <button onclick="deletaTarefa(${contador})" class="delete">
                <i class="mdi mdi-delete"></i>
                Deletar
            </button>
        </div>
    </div>`;

    main.innerHTML += novoItem;
    input.value = "";
    input.focus();
    }
}

input.addEventListener("keyup", function (event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

function deletaTarefa(id){
    document.getElementById(id).remove();
}


function selecionaTarefa(id){
   var item = document.getElementById(id);
   var classe = item.getAttribute('class');
   
   if(classe == "item"){
        item.classList.add("clicado");
        
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline")
        icone.classList.add("mdi-check-circle");
   
    }else {
        item.classList.remove("clicado");
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
   }

}