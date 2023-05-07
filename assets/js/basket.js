function addCount(){
let cart_html = document.querySelector ('.counter p')
let count = cart_html.innerHTML
count = parseInt(count)
count += 1
cart_html.innerHTML = count  


}

function minusCount(){
    let cart_html = document.querySelector ('.counter p')
    let count = cart_html.innerHTML
    count = parseInt(count)
    count -= 1
    cart_html.innerHTML = count  
    
}