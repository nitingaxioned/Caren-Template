document.querySelector("nav").addEventListener("click", function(){
    document.querySelector(".pre-nav").classList.toggle("hide-me");
    document.querySelector(".nav-list").classList.toggle("hide-me");
    this.classList.toggle("active-nav");
});

document.querySelector(".nav-list").addEventListener("click", function(e){ e.stopImmediatePropagation(); });

// variable declerations
var slideNodes = document.querySelectorAll(".slide");
var slideBox = document.querySelector(".slider");
var i = 0;

// removing txt from slider-dots
document.querySelector(".slider-dots").innerHTML = "";

// Event listners for product items
slideNodes.forEach(function(val, index){
    var btnDot = document.createElement("span");
    btnDot.innerHTML = "dot";
    btnDot.classList.add("slider-dot");
    var btnDotTxt = document.createTextNode(" ");
    document.querySelector(".slider-dots").appendChild(btnDot);
    document.querySelector(".slider-dots").appendChild(btnDotTxt);
});

// making nodelist of dynamic dots and adding Event listner to it
var dots = document.querySelectorAll(".slider-dot");
dots.forEach(function(val, index){
    val.addEventListener("click", function(){
        console.log("click on dot");
        setSlide(index);
        i = index;
    });
});

function setSlide(index){
    slideBox.style.transform = "translateX(-"+100*index+"%)";
    dots.forEach(function(val){ val.classList.remove("active-dot")});
    dots[index].classList.add("active-dot");
    i = index;
}

//Event listner on privious-btn
document.querySelector(".privious-btn").addEventListener("click", function(){
    if(i == 0)
        i = (dots.length - 1);
    else
        i -= 1;
    setSlide(i);
});

//Event listner on next btn
document.querySelector(".next-btn").addEventListener("click", function(){incriment();})

function  incriment(){
    if(i == (dots.length - 1))
        i = 0;
    else
        i += 1;
    setSlide(i);
}

var slideTimer = setInterval(function(){incriment();},3000);






