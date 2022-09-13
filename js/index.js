const listaProdutos     = document.querySelector(".div-ul-two")
const listaProdutosDois = document.querySelector(".div-ul-three")


//function para listar os produtos na ul de cima
function listarProdutos(produto , ref){
    for(let i = 0; i < 3; i++){
        let item = produto[i]                
        let templateMontado = criarTemplate(item)        
        ref.appendChild(templateMontado)            
    }   
    let botoesProdutos = document.querySelectorAll(".div-ul-two .product-add")    
    let carrinhoVazio = document.querySelector(".div-itens .info-itens")
        for(let i = 0; i < botoesProdutos.length; i++){
        let botao = botoesProdutos[i];            
        botao.addEventListener('click', function(event){   
        let elemento = event.target
        let idElemento =parseInt(elemento.id)
        let obj = procuraItem(idElemento)    
        criarTemplateCarrinho(obj)
        carrinhoVazio.remove()                  
        }) 
    }
    
    // console.log(carrinhoVazio)       
}
listarProdutos(data, listaProdutos)

//function para listar os produtos na ul de baixo
function listarProdutosDois(produto , ref){
    for(let i = 3; i < 6 ; i++){
        let item = produto[i]                
        let templateMontado = criarTemplate(item)        
        ref.appendChild(templateMontado)                         
    } 
    let botoesProdutos = document.querySelectorAll(".div-ul-three .product-add")    
                
        for(let i = 0; i < botoesProdutos.length; i++){
        let botao = botoesProdutos[i];    
        botao.addEventListener('click', function(event){

        let elemento = event.target
        let idElemento = parseInt(elemento.id)

        let obj = procuraItem(idElemento)       
        criarTemplateCarrinho(obj)                    
        
        }) 
    }        
}
listarProdutosDois(data, listaProdutosDois)



//function para procurar o item pedo id
function procuraItem(id){
    for(let j = 0; j < data.length; j++){
        let prod = data[j]
        if(prod.id === id){         
         return prod   
        }            
    }
    return false
} 


//function criar template para add aos ul
function criarTemplate(produto){
    let imagem        = produto.img
    // console.log(imagem)
    let categoria     = produto.tag
    let nome          = produto.nameItem
    let descricao     = produto.description
    let valor         = produto.value
    let identificacao = produto.id
    let carrinho      = produto.addCart
    // console.log(produto)

    let tagLi     = document.createElement("li")
    let tagCat    = document.createElement("div")
    let tagCatImg = document.createElement("img")
    let tagInfo   = document.createElement("p")
    let tagName   = document.createElement("h2")
    let tagPar    = document.createElement("p")
    let tagValor  = document.createElement("p")
    let tagAdd    = document.createElement("button")

    tagInfo.classList.add("div-p")

    tagCatImg.src      = `${imagem}`
    tagCatImg.alt      = `${nome}`
    tagCatImg.id       = `${identificacao}`
    tagInfo.innerText  = `${categoria}`
    tagName.innerHTML  = `<strong>${nome}</strong>`
    tagPar.innerText   = `${descricao}`
    tagValor.innerText = `R$${valor}`
    tagAdd.innerText   = `${carrinho}`
    tagAdd.className   = ("product-add")    
    tagAdd.id          = `${identificacao}`

    tagCat.appendChild(tagCatImg)
    tagLi.appendChild(tagCat)
    tagLi.appendChild(tagInfo)
    tagLi.appendChild(tagName)
    tagLi.appendChild(tagPar)
    tagLi.appendChild(tagValor)
    tagLi.appendChild(tagAdd)
            
    return tagLi    
}
// console.dir(criarTemplate(data))


//function para criar o template do carrinho
function criarTemplateCarrinho(prod){
    let listaCarrinho = document.querySelector(".div-pai-car")
    

    let li     = document.createElement("li");
    let img    = document.createElement("img");
    let div    = document.createElement("div");
    let title  = document.createElement("h2");
    let preco  = document.createElement("p");
    let remove = document.createElement("button");

    // console.log(prod)

    li.className = ("div-car");
    img.src = prod.img;
    // console.log(img)
    img.alt = prod.nameItem;
    div.className = ("div-info-car");
    title.innerHTML = `<strong>${prod.nameItem}</strong>`;
    preco.innerText = `R$${prod.value}`;
    remove.innerHTML = "Remover Produto";

    // let carrinhoVazio = document.querySelector(".div-itens")
    // carrinhoVazio.add(".info-itens")
    
    remove.addEventListener('click', function(event){        
        let li = event.path[2]        
        li.remove()      
        
    })
    // let carrinhoVazio = document.querySelector(".div-itens")
    // let addCarrinhoVazio = document.querySelector(".info-itens")
    // console.log(carrinhoVazio.length)
    // for(let i = 0; i < carrinhoVazio.length; i++){
    //     if(carrinhoVazio.length == 1){

    //     }
    // }
        

    li.appendChild(img)
    
    div.appendChild(title)
    div.appendChild(preco)
    div.appendChild(remove)
    li.appendChild(div)
    
    listaCarrinho.appendChild(li) 

}

// <li class="div-car">
//    <img src="./img/camiseta_preta.svg" alt="">
//    <div class="div-info-car">
//       <h2><strong>Lightweigth Jacket</strong></h2>
//       <p>R$100.00</p>
//       <a href="">Remover Produto</a>
//    </div>
// </li>
