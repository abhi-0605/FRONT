
// navbar background change on scroll

// navbar color change on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#c91f2f";
    } 
    else{
        header.style.background = "#e23744";
    }

});

// search bar animation placeholder effect

const searchInput = document.querySelector("input");

const suggestions = [
    "Search for Pizza",
    "Search for Biryani",
    "Search for Burger",
    "Search for North Indian food",
    "Search for Chinese food"
];

let index = 0;

setInterval(() => {

    searchInput.placeholder = suggestions[index];

    index++;

    if(index === suggestions.length){
        index = 0;
    }

},2000);


// logo fade animation when page loads

window.addEventListener("load", () => {

    const logo = document.querySelector("main img");

    logo.style.opacity = "0";
    logo.style.transform = "translateY(-20px)";
    logo.style.transition = "1s";

    setTimeout(() => {
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
    },300);

});