const listaProdutos = document.querySelector(".div-ul-two")
const listaProdutosDois = document.querySelector(".div-ul-three")








function listarProdutos(produto , ref){
    for(let i = 0; i < 3; i++){
        let item = produto[i]                
        let templateMontado = criarTemplate(item)        
        ref.appendChild(templateMontado)       

    } 
    
}
listarProdutos(data, listaProdutos)

function listarProdutosDois(produto , ref){
    for(let i = 3; i <= 6 ; i++){
        let item = produto[i]                
        let templateMontado = criarTemplate(item)        
        ref.appendChild(templateMontado)       

    } 
        
}
listarProdutosDois(data, listaProdutosDois)


function criarTemplate(produto){
    let imagem = produto.img
    // console.log(imagem)
    let categoria = produto.tag
    let nome = produto.nameItem
    let descricao = produto.description
    let valor = produto.value
    let identificacao = produto.id
    let carrinho = produto.addCart
    // console.log(produto)

    let tagLi = document.createElement("li")
    let tagCat = document.createElement("div")
    let tagCatImg = document.createElement("img")
    let tagInfo = document.createElement("p")
    let tagName = document.createElement("h2")
    let tagPar = document.createElement("p")
    let tagValor = document.createElement("p")
    let tagAdd = document.createElement("button")

    tagInfo.classList.add("div-p")

    tagCatImg.src = `${imagem}`
    tagCatImg.alt = `${nome}`
    tagCatImg.id = `${identificacao}`
    tagInfo.innerText = `${categoria}`
    tagName.innerHTML = `<strong>${nome}</strong>`
    tagPar.innerText = `${descricao}`
    tagValor.innerText = `R$${valor}`
    tagAdd.innerText = `${carrinho}`
    tagAdd.className = ("product-add")    
    tagAdd.id = `${identificacao}`

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

    
// let botoesProdutos = document.getElementsByClassName("product-add")

//     for(let i = 0; i < botoesProdutos.length; i++){
//         let botao = botoesProdutos[i];    
//         botao.addEventListener('click', function(event){
//             let elemento = event.target;
//             let idElemento = elemento.id
//             console.dir(idElemento)
//         }) 
//     }
