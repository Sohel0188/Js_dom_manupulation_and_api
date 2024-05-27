// document.getElementById("search").addEventListener("click",(e)=>{
// document.getElementById("search_value").value;
// console.log(value)
// })
const search = (event) =>{
    const input_value = document.getElementById("search_value").value;
   // console.log(input_value)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input_value}`)
        .then(res=>res.json())
        .then((data)=>{
            
            displayProduct(data.meals)
            
        })
}

const displayProduct = (products) => {
    const productsContainer = document.getElementById("product_container");
    products.forEach(product => {
        console.log(product)
        const div = document.createElement("div");
        div.classList.add("productCard");
        div.innerHTML = 
        `<img src="${product.strMealThumb}" alt="">
        <h3>${product.strMeal}</h3>
        
        <p>${product.strInstructions.slice(0,170)}</p>
        <br>
        <button onclick="productDetails(${product.idMeal})"> View Details </button>
        
        <button> Add to Cart </button>
        `
        productsContainer.appendChild(div)
    });
}

const productDetails = (productId)=>{
    
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
    .then(res=>res.json())
        .then((data)=>{
            //console.log(productId);
            console.log(data)
            //displayDetails(data.meals)
            const meal = data.meals[0];
            const detailsContainer = document.getElementById("details-container");
            detailsContainer.innerHTML = '';
            const div = document.createElement("div")
            div.classList.add("details_details");
            div.innerHTML=`
            <img src="${meal.strMealThumb}" alt="">
            <h3>${meal.strMeal}</h3>
            <p>${meal.strInstructions}</p>
            `
            detailsContainer.appendChild(div)    
        });
}
