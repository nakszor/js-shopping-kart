let carrinho = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.99,
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99,
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.99,
    },
    {
        id: 5,
        name: "Água Tônica",
        price: 17.98,
    }
]
   
let primeirop       = document.createElement("p")
let segundop        = document.createElement("p")
let criaDiv         = document.createElement("div")
let tagMain         = document.createElement("main")

criaDiv.classList.add("cabecalho")
primeirop.innerText = 'Item'
segundop.innerText  = 'Preço'

let body = document.querySelector(".body")

body.appendChild(tagMain)
tagMain.appendChild(criaDiv)
criaDiv.appendChild(primeirop)
criaDiv.appendChild(segundop)

let tagUl = document.createElement("ul")

tagUl.classList.add("lista-de-produtos")

tagMain.appendChild(tagUl)

function criaLista(objeto) {
    
    for (let index = 0; index < objeto.length; index++) {

        let itemLista = objeto[index]
           
        let item = criarLista(itemLista)
            
       tagUl.appendChild(item)
            
    } 

}
criaLista(carrinho)

 function criarLista(itemDaLista) {
        let nome        = itemDaLista.name
        let preco       = itemDaLista.price
    
        let nomeDoItem      = document.createElement("p")
        let valorDoItem     = document.createElement("p")
        let tagLi           = document.createElement("li")
        

        nomeDoItem.innerText     = nome
        valorDoItem.innerText    = `R$${preco}`
    
        
        tagLi.classList.add("produto")
    
        tagLi.appendChild(nomeDoItem)
        tagLi.appendChild(valorDoItem)
    
         return tagLi
}

function soma(array) {
 let elemento = 0
    for (let index = 0; index < array.length; index++) {
         elemento  += array[index].price
        
    }   
    return elemento
}


let totalTagp = document.createElement("p")
let valorSoma = document.createElement("p")
let divTotal = document.createElement("div")
let botao = document.createElement("button")
let tagSection = document.createElement("section")

totalTagp.innerText = ("Total")

valorSoma.innerText = `R$${soma(carrinho)}`
botao.innerText = "Finalizar"
divTotal.classList.add("total")
botao.classList.add("botao")

divTotal.appendChild(totalTagp)
divTotal.appendChild(valorSoma)
tagSection.appendChild(divTotal)
tagSection.appendChild(botao)
tagMain.appendChild(tagSection)



