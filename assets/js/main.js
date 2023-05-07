let cards = [
    {
        img: "./assets/img/bag.jpg", 
        title: "Bag summer collection",
        price: 50
    },
    {
        img: "./assets/img/scarf.jpg", 
        title: "Bag winter collection",
        price: 60
    },
    {
        img: "./assets/img/man.jpg", 
        title: "collection man",
        price: 40
    },
]

const setCards = () =>{
    let container = document.querySelector('.cards .container')

console.log(container)

cards.forEach(item =>{
    let card=` <a href="./assets/pages/product.html">
    <div class="product">
        <div class="back">
            <div class="cover">
                <img src=${item.img}>
                <div class="circle"></div>
            </div>
        </div>
        <div class="content">
            <p class="title">${item.title}</p>
            <p class="price">${item.price}</p>
        </div>
    </div>
</a>`
container.innerHTML +=card
})
container.setAttribute('style', 'flex-wrap:wrap;')
}
function changeprice(change = 0){
let price_html = document.querySelector('.price')
let price = price_html.innerHTML
price = price_html.innerHTML
price = price.replace ('$', '')

price = parseFloat(price)

let new_price = price + change
if ( new_price < price){
    price_html.setAttribute('style','color:green;')
}
price_html.innerHTML = '$' + new_price




console.log(price)
}
changeprice(50)
const sortCards = () =>{
    cards.sort((a,b) =>{
        return a.price - b.price
})
}
sortCards()