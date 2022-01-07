// PRELOADER
var loader = document.getElementById("preloader")

window.addEventListener("load", function() {
    loader.style.display = "none";
})

// RIGHT CLICK
window.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
});
window.addEventListener("click", function() {
    document.getElementById("context-menu").classList.remove("active");
});

// CURSOR CUSTOM 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    }

)
document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
                cursor.classList.remove("expand");
            }

            , 200)
    }

)

// SLIDE AREA

// SLIDE LANDING 
var slideIndex = 1;
showslides(slideIndex);

function nextSlides(n) {
    showslides(slideIndex += n);
}

function currentslide(n) {
    showslides(slideIndex = n);
}

function showslides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("fot");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-slide";
}

// SLIDE ROCKET 

//EIGINE
var slideIndex = 1;
showslides(slideIndex);

function nextSlides(n) {
    showslides(slideIndex += n);
}

function currentslide(n) {
    showslides(slideIndex = n);
}

function showslides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("fot");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide-2", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active-slide-2";
}

// SLIDE FEATURE 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-slide";
}

// PARALLAX 3 
var slideIndex = 1;
Showslides(slideIndex);

function nextSlides(n) {
    Showslides(slideIndex += n);
}

function rentslide(n) {
    Showslides(slideIndex = n);
}

function Showslides(n) {
    var i;
    var slides = document.getElementsByClassName("MySlides");
    var dots = document.getElementsByClassName("tot");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide-", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active-slide-";
}
