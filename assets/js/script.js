document.querySelector("nav").addEventListener("click", function(){
    document.querySelector(".pre-nav").classList.toggle("hide-me");
    document.querySelector(".nav-list").classList.toggle("hide-me");
    this.classList.toggle("active-nav");
});

document.querySelector(".nav-list").addEventListener("click", function(e){ e.stopImmediatePropagation(); });

















