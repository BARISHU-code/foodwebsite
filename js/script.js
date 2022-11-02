const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");

//!buttons
 const searchBtn = document.querySelector("#search-btn");
 const cartBtn = document.querySelector("#cart-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    })

    cartBtn.addEventListener("click", function(){
        
        cartItem.classList.toggle("active");
        })



