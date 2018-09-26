const button = document.querySelector(".btn-tarefas");
const input = document.querySelector(".form__input");
const list = document.querySelector(".list-tarefas");

button.addEventListener("click", function (e){
    e.preventDefault();
    //alert("Oi!");
    
    const checkAll = document.querySelector(".btn-check-all");
    checkAll.style.display = "flex";
    
    checkAll.addEventListener("click", function(ev){
        ev.preventDefault();
        list.style.textDecoration = "line-through"
        list.style.color = "gray"
    })
    
    // const deleteAll = document.querySelector(".btn-delete-all");
    // deleteAll.style.display = "flex";

    // checkAll.addEventListener("click", function(evn){
    //     evn.preventDefault();
    //     for(i = 0; i < list.length[i]; i++){
            
    //     }
    // })


    if(input.value === "" || input.value === " "){
        return false;
    }
    //ADD LINHA
    const linha = document.createElement("li");
    linha.className = "list-item";

    //INSERE TEXTO DO INPUT NA LINHA
    linha.innerHTML = (input.value);

    //ADD LINHA DENTRO DA LISTA
    list.appendChild(linha);
    
    //LIMPA INPUT AO ENVIAR INPUT
    input.value = "";

    //ADD CHECK NOS ITENS
    linha.addEventListener("click", function(e){
        e.preventDefault();
        linha.style.textDecoration = "line-through"
        linha.style.color = "gray"

    })
        const span = document.createElement("span");
        //ADD CLASSE NO SPAN
        span.className = "list-tarefas__span"
        //ADD CLASSE BOTÃO NO SPAN DIRETO NO HTML
        span.innerHTML= `<button class="list-tarefas__botao-excluir">x</button>`

        span.addEventListener("click", function(event){
            event.preventDefault();
            //DELETA LINHA QUANDO CLICA NO X
            linha.remove()
        })
        // ADD SPAN NA LINHA   
        linha.appendChild(span)    

})



    

    

   