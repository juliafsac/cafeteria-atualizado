const lista = document.querySelector(caixa-cards)
const cafe = [

  {
nome: "Espresso" ,
descricao: "Café concentrado y aromático",
preco: "$3.50" ,
img: "assets/produtos/produto01.png"
  } , 

   {
nome: "Capuccino" ,
descricao: "Espresso con leche vaporizada y espuma",
preco: "$4.50" ,
img: "assets/produtos/produto02.png"
  } , 

   {
nome: "Café Helado" ,
descricao: "Refrescante café frio con hielo",
preco: "$5.0" ,
img: "assets/produtos/produto03.png"
  }  ,
]
 const bolos = [
{
nome: "Pastel de chocolate" ,
descricao: "Biscoito suave com cobertura de chocolate" ,
preco: "$4.00" ,
img: "assets/produtos?bolo1.png"
},

{
nome: "Pastel de fresa" ,
descricao: "Pastel com crema dulce y fresas frescas" ,
preco: "$4.50" ,
img: "assets/produtos/bolo1.png"
},

{
nome: "Pastel de Vanilla" ,
descricao: "Clássico pastel esponjoso de vanilla" ,
preco: "$3.80" ,
img: "assets/produtos"

}
 ]

 function mostrarProdutos(produtos){

    lista.innerHTML = ""

    produtos.forEach(produtos =>{
        lista.innerHTML += `
        
        <div class="card">

                    <div class="caixa-img-cards"><img class="img-cards"
                            src="${produtos.img}" alt="">
                    </div>

                    <div class="caixa-texto-card">

                        <p class="titulo-card">${produtos.nome}</p>

                        <p class="subtitulo-card">${produtos.decricao}</p>

                        <div class="preco-btn-card">

                            <p class="preco-card">${produtos.preco}</p>

                            <button class="btn-card"> <i class="bi bi-cart2 card-btn"></i> Adicionar </button>
                        </div>


                    </div>
        `
    } )
   
}