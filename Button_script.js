document.addEventListener("click", function(e){

    const element = e.target.closest("[data-link]");

    if(element){
        e.preventDefault();
        window.location.href = element.dataset.link;
    }

});






let lastScrollTop = 0;
let navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        
        navbar.style.top = "-100px";
    } else {
        
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});