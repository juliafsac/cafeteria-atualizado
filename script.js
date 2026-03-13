const lista = document.querySelector(".lista-produtos")
const cafe = [
{
nome: "Espresso",
descricao: "Café concentrado y aromático",
preco: "$3.50",
img: "assets/produtos/produto01.png"
},
{
nome: "Cappuccino",
descricao: "Espresso con leche vaporizada y espuma",
preco: "$4.50",
img: "assets/produtos/produto02.png"
},
{
nome: "Café Helado",
descricao: "Refrescante café frío con hielo",
preco: "$5.00",
img: "assets/produtos/produto03.png"
}
]

const bolos = [
{
nome: "Pastel de Chocolate",
descricao: "Bizcocho suave con cobertura de chocolate",
preco: "$4.00",
img: "assets/produtos/bolo1.png"
},
{
nome: "Pastel de Fresa",
descricao: "Pastel con crema dulce y fresas frescas",
preco: "$4.50",
img: "assets/produtos/bolo2.png"
},
{
nome: "Pastel de Vainilla",
descricao: "Clásico pastel esponjoso de vainilla",

preco: "$3.80",
img: "assets/produtos/bolo3.png"
}
]

const comidas = [
{
nome: "Hamburguesa",
descricao: "Carne jugosa con queso y pan artesanal",
preco: "$7.00",
img: "assets/produtos/hamburguer.png"
},
{
nome: "Macarrones",
descricao: "Pasta con salsa de tomate y especias",
preco: "$6.50",
img: "assets/produtos/macarrao.png"
},
{
nome: "Lasaña",
descricao: "Capas de pasta con carne y queso gratinado",
preco: "$8.00",
img: "assets/produtos/lasanha.png"
}
]

function mostrarProdutos(produtos){
lista.innerHTML = ""
produtos.forEach(produto => {
lista.innerHTML += `
<div class="produto">
<img class="imagem-produto" src="${produto.img}" alt="">
<div class="informacao-produto">

<p class="titulo-produto">${produto.nome}</p>
<p class="subtitulo-produto">${produto.descricao}</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">${produto.preco}</p>
<button class="btn-produto">
<i class="bi bi-cart"></i>
<p class="texto-btn-produto">Agregar</p>
</button>
</div>
</div>
`
})
}

document.querySelector(".btn01-produtos").addEventListener("click", () => {
mostrarProdutos(cafe)
})

document.querySelector(".btn02-produtos").addEventListener("click", () => {
mostrarProdutos(bolos)
})

document.querySelector(".btn03-produtos").addEventListener("click", () => {

mostrarProdutos(comidas)
})

/* produtos iniciais */
mostrarProdutos(cafe)