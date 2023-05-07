fetch('./assets/pages/components/header.html')
.then(response=>{
    return response.text()
})

.then(data =>{
    document.querySelector('.wrapper').innerHTML = data
})

fetch('./assets/pages/components/main.html')
.then(response=>{
    return response.text()
})

.then(data =>{
    document.querySelector('.main-include').innerHTML = data
})

fetch('./assets/pages/components/category.html')
.then(response=>{
    return response.text()
})

.then(data =>{
    document.querySelector('.category-include').innerHTML = data
    
})

fetch('./assets/pages/components/cards.html')
.then(response=>{
    return response.text()
})

.then(data =>{
    document.querySelector('.cards-include').innerHTML = data
    setCards()
})

