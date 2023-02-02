const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const count = document.querySelector('#count')

let num=0
let n = 1

const price = document.querySelector('#price')
const itemDescr = document.querySelector('#itemDescr')

num!==0?price.innerHTML=`$125 x ${num} <b>$${125*num}.00</b>`:itemDescr.innerHTML=`<h5 id="empty">Your cart is empty.</h5>`


    minus.addEventListener('click',()=>{
        if(num>0){
        num--
        count.innerHTML=num
        }else{
            num=0
        }
    })
    plus.addEventListener('click',()=>{
        num++
        count.innerHTML=num
    })

const cell1 = document.querySelector('#cell1')
const cell2 = document.querySelector('#cell2')
const cell3 = document.querySelector('#cell3')
const cell4 = document.querySelector('#cell4')
const cellMain = document.querySelector('#cellMain')

cell1.addEventListener('click',()=>{
    cell1.classList.add('choosen')
    cell2.classList.remove('choosen')
    cell3.classList.remove('choosen')
    cell4.classList.remove('choosen')
    n=1
    cellMain.innerHTML=' <img src="./ecommerce-product-page-main/images/image-product-1.jpg" class="bigSize">'
})
cell2.addEventListener('click',()=>{
    cell2.classList.add('choosen')
    cell1.classList.remove('choosen')
    cell3.classList.remove('choosen')
    cell4.classList.remove('choosen')
    n=2
    cellMain.innerHTML=' <img src="./ecommerce-product-page-main/images/image-product-2.jpg" class="bigSize">'
})    
cell3.addEventListener('click',()=>{
    cell3.classList.add('choosen')
    cell2.classList.remove('choosen')
    cell1.classList.remove('choosen')
    cell4.classList.remove('choosen')
    n=3
    cellMain.innerHTML=' <img src="./ecommerce-product-page-main/images/image-product-3.jpg" class="bigSize">'
})
cell4.addEventListener('click',()=>{
    cell4.classList.add('choosen')
    cell2.classList.remove('choosen')
    cell3.classList.remove('choosen')
    cell1.classList.remove('choosen')
    n=4
    cellMain.innerHTML=' <img src="./ecommerce-product-page-main/images/image-product-4.jpg" class="bigSize">'
})

const zoom = document.querySelector('#zoom')

cellMain.addEventListener('click',()=>{
    zoom.setAttribute('style','display:flex')
    mainImgZoom.src=`./ecommerce-product-page-main/images/image-product-${n}.jpg`
    ar.forEach(el=>{el.classList.remove('choosen')})
    ar[n-1].classList.add('choosen')
})

const close = document.querySelector('#close')
close.addEventListener('click',()=>{
    zoom.setAttribute('style','display:none')
})

const cell1Z = document.querySelector('#cell1Z')
const cell2Z = document.querySelector('#cell2Z')
const cell3Z = document.querySelector('#cell3Z')
const cell4Z = document.querySelector('#cell4Z')
const cellMainZ = document.querySelector('#cellMainZ')
const ar=[cell1Z,cell2Z,cell3Z,cell4Z]

cell1Z.addEventListener('click',()=>{
    cell1Z.classList.add('choosen')
    cell2Z.classList.remove('choosen')
    cell3Z.classList.remove('choosen')
    cell4Z.classList.remove('choosen')
    n=1
    mainImgZoom.src = `./ecommerce-product-page-main/images/image-product-${n}.jpg`
})

cell2Z.addEventListener('click',()=>{
    cell2Z.classList.add('choosen')
    cell1Z.classList.remove('choosen')
    cell3Z.classList.remove('choosen')
    cell4Z.classList.remove('choosen')
    n=2
    mainImgZoom.src = `./ecommerce-product-page-main/images/image-product-${n}.jpg`
})

cell3Z.addEventListener('click',()=>{
    cell3Z.classList.add('choosen')
    cell2Z.classList.remove('choosen')
    cell1Z.classList.remove('choosen')
    cell4Z.classList.remove('choosen')
    n=3
    mainImgZoom.src = `./ecommerce-product-page-main/images/image-product-${n}.jpg`
})

cell4Z.addEventListener('click',()=>{
    cell4Z.classList.add('choosen')
    cell2Z.classList.remove('choosen')
    cell3Z.classList.remove('choosen')
    cell1Z.classList.remove('choosen')
    n=4
    mainImgZoom.src = `./ecommerce-product-page-main/images/image-product-${n}.jpg`
})

    const prev = document.querySelector('#prev')
    const next = document.querySelector('#next')
    const mainImgZoom = document.querySelector('#mainImgZoom')
    

function prevNext(){

    if(this.id==='next'){
       
        n===4?n:n++

        ar.forEach(el => { el.classList.remove('choosen')});
        ar[n-1].classList.add('choosen')

        mainImgZoom.src = `./ecommerce-product-page-main/images/image-product-${n}.jpg`
    
    }else if(this.id==='prev'){
        n===1?n:n--
        ar.forEach(el => { el.classList.remove('choosen')});
        ar[n-1].classList.add('choosen')
    
        mainImgZoom.src = `./ecommerce-product-page-main/images/image-product-${n}.jpg`
    
    }
}
next.addEventListener('click',prevNext)
prev.addEventListener('click',prevNext)


const prevMobile=document.querySelector('#prevMobile')
const nextMobile=document.querySelector('#nextMobile')
function prevNextMobile(){

    if(this.id==='nextMobile'){
       
        n===4?n:n++

        ar.forEach(el => { el.classList.remove('choosen')});
        ar[n-1].classList.add('choosen')

        cellMain.innerHTML = `<img src="./ecommerce-product-page-main/images/image-product-${n}.jpg" class="bigSize" alt="picture of product X">`
    
    }else if(this.id==='prevMobile'){
        n===1?n:n--
        ar.forEach(el => { el.classList.remove('choosen')});
        ar[n-1].classList.add('choosen')
    
        cellMain.innerHTML = `<img src="./ecommerce-product-page-main/images/image-product-${n}.jpg" class="bigSize" alt="picture of product X">`
    
    }
}

nextMobile.addEventListener('click',prevNextMobile)
prevMobile.addEventListener('click',prevNextMobile)

const addToBasket = document.querySelector('#addToBasket')
const totalCart = document.querySelector('#totalCart')
const items = document.querySelector('#items')
const itemsNum = document.querySelector('#itemsNum')

addToBasket.addEventListener('click',()=>{
    itemsNum.innerHTML=num
    
    num===0?items.setAttribute('style','display:none'):items.setAttribute('style','display:flex')

    num!==0?itemDescr.innerHTML=`<img src="./ecommerce-product-page-main/images/image-product-1.jpg">
    <div>
      <h5>Fall Limited Edition Sneakers</h5>
      <h5 id="price">$125 x ${num} <b>$${num*125}.00</b></h5>
    </div>
    <img class="delete" id="delItems" src="./ecommerce-product-page-main/images/icon-delete.svg">`:itemDescr.innerHTML=`<h5 id="empty">Your cart is empty.</h5>`
    if(num!==0){
        const deItems = document.querySelector('#delItems')

        deItems.addEventListener('click',()=>{
        num=0
        itemDescr.innerHTML=`<h5 id="empty">Your cart is empty.</h5>`
        count.innerHTML=num
        items.setAttribute('style','display:none')
})
    }
})

const cart = document.querySelector('#blackCart')

let showOrHidden = 2

cart.addEventListener('click',()=>{
    
    if(showOrHidden%2===0){
        totalCart.setAttribute('style','opacity:1;z-index:1')
        showOrHidden--
    }else{
        totalCart.setAttribute('style','opacity:0;z-index:-1')
        showOrHidden++
}
})

const burger = document.querySelector('#burger')
const burger1 = document.querySelector('#burger1')
const burger2 = document.querySelector('#burger2')
const burger3 = document.querySelector('#burger3')
let number=1
const burgerMenu = document.querySelector('#burgerMenu')
const burgerClose = document.querySelector('#burgerClose')

burger.addEventListener('click',()=>{
    if(number===1){
        burger1.setAttribute('style','transform:translatey(8px)rotate(45deg);')
        burger2.setAttribute('style','opacity:0;')
        burger3.setAttribute('style','transform:translatey(-8px)rotate(-45deg);')
        number++

        burgerMenu.setAttribute('style','display:flex')
    }else{
        burger1.setAttribute('style','transform:translatey(0px)rotate(0deg);')
        burger2.setAttribute('style','opacity:1;')
        burger3.setAttribute('style','transform:translatey(0)rotate(0);')
        number--
    }
})

burgerClose.addEventListener('click',()=>{
    burgerMenu.setAttribute('style','display:none')

    burger1.setAttribute('style','transform:translatey(0px)rotate(0deg);')
    burger2.setAttribute('style','opacity:1;')
    burger3.setAttribute('style','transform:translatey(0)rotate(0);')
    number--
})


