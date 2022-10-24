

// Grabs the bar as an item 
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");


const close_bar = document.getElementById("close");


if (bar){
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}

if (close_bar){
    close_bar.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}