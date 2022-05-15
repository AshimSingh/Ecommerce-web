const products = document.querySelector(".productClass")
const newArrivals=document.querySelector(".newArrival")


const data = [
    {
        "mrp":"1200",
        "img":"img/products/f1.jpg",
        "brand":"adidas",
        "productName":"Cartoon astronaut T-Shirts",
    },
    {
        "mrp":"1800",
        "img":"img/products/f2.jpg",
        "brand":"adidas",
        "productName":"Cartoon astronaut T-Shirts",
    },
    {
        "mrp":"2000",
        "img":"img/products/f3.jpg",
        "brand":"adidas",
        "productName":"Cartoon astronaut T-Shirts",
    },
    {
        "mrp":"2200",
        "img":"img/products/f4.jpg",
        "brand":"adidas",
        "productName":"Cartoon astronaut T-Shirts",
    },
    {
        "mrp":"1600",
        "img":"img/products/f5.jpg",
        "brand":"adidas",
        "productName":"Cartoon astronaut T-Shirts",
    },
    {
        "mrp":"1900",
        "img":"img/products/f6.jpg",
        "brand":"adidas",
        "productName":"Cartoon astronaut T-Shirts",
    },
    {
        "mrp":"3000",
        "img":"img/products/f7.jpg",
        "brand":"adidas",
        "productName":"Cartoon astronaut T-Shirts",
    },
    {
        "mrp":"5000",
        "img":"img/products/f8.jpg",
        "brand":"adidas",
        "productName":"Cartoon astronaut T-Shirts",
    }
]
const newdata = [
    {
        "mrp":"1250",
        "img":"img/products/n1.jpg",
        "brand":"adidas",
        "productName":"Summer Sweatshirt",
    },
    {
        "mrp":"1780",
        "img":"img/products/n2.jpg",
        "brand":"adidas",
        "productName":"Summer half Sleeve shirt",
    },
    {
        "mrp":"2050",
        "img":"img/products/n3.jpg",
        "brand":"adidas",
        "productName":"Astronaut T-Shirts",
    },
    {
        "mrp":"2500",
        "img":"img/products/n4.jpg",
        "brand":"adidas",
        "productName":"Balen T-Shirts",
    },
    {
        "mrp":"1650",
        "img":"img/products/n5.jpg",
        "brand":"adidas",
        "productName":"Cartoon T-Shirts",
    },
    {
        "mrp":"2000",
        "img":"img/products/n6.jpg",
        "brand":"Alpha",
        "productName":"Alpha T-Shirts",
    },
    {
        "mrp":"3000",
        "img":"img/products/n7.jpg",
        "brand":"adidas",
        "productName":"Cartoon T-Shirts",
    },
    {
        "mrp":"5500",
        "img":"img/products/n8.jpg",
        "brand":"Alpha",
        "productName":"Astronaut T-Shirts",
    }
]


function featuredPro(array){
    products.innerHTML=""
    // let productlist = document.createElement("div")
    for(let i=0;i<array.length;i++){
        products.innerHTML += ` 
        <div class="product">
        <img src="${array[i].img}">
        <div class="description">
            <span>adidas</span>
            <h4>Cartoon astronaut T-Shirts</h4>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h5>${data[i].mrp}</h5>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></i></a>
        </div>
    </div>`
    
    }


}
featuredPro(data)
function Arrivals(array){
    newArrivals.innerHTML= ""
    for(let i=0;i<array.length;i++){
        newArrivals.innerHTML +=`
        <div class="product">
        <img src="${array[i].img}">
        <div class="description">
            <span>${array[i].brand}</span>
            <h4>${array[i].productName}</h4>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h5>${data[i].mrp}</h5>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></i></a>
        </div>
    </div>
        
        `
    }
}
Arrivals(newdata)