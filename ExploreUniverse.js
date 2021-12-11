// GSAP AREA 
gsap.from('.astronaut img', {
    opacity: -1,
    ease: 'slow',
    duration: 12,
    x: -600
}

);

gsap.to('.astronaut img', {
    opacity: 1,
    ease: 'slow',
    duration: 10
}

);

gsap.from('.logo img', {
    opacity: -1,
    ease: 'expo',
    duration: 5,
    scale: -5,
    y: -1000
}

);

gsap.from('img.nasa ', {
    repeat: 4,
    yoyo: true,
    opacity: 0.5,
    ease: 'power4',
    duration: 5,
    x: 100
}

);

gsap.from('img.spacex', {
    repeat: 4,
    yoyo: true,
    opacity: 0,
    ease: 'expo',
    delay: 2,
    duration: 5
}

);

gsap.from('.engines img', {
    repeat: -1,
    yoyo: true,
    opacity: 0,
    ease: 'elastic',
    delay: 1
}

);

// gsap.from('.rocket-body .rocket1',{duration:40, y:1000,ease:'expo'});
// gsap.from('.rocket-body .rocket2',{duration:42, y:1000,ease:'power4'});
// gsap.from('.rocket-body .rocket3',{duration:44, y:1000,ease:'rough'});
gsap.from('.floating-graphics img', {
    repeat: -1,
    yoyo: true,
    opacity: 0,
    ease: 'elastic',
    delay: 1,
    y: 50
}

);

gsap.from('.floating-graphics2 img', {
    repeat: -1,
    yoyo: true,
    opacity: -1,
    ease: "back.inOut(1.7)",
    y: -200,
    y: 100
}

);

gsap.from('.down', {
    repeat: -1,
    yoyo: true,
    opacity: -1,
    ease: 'power',
    y: 100
}

);

// GSAP SCROLL 

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.btn-primary',
        start: "center center",
    }
    ,
}

);

tl.from(".marine", {
    y: 100,
    opacity: 0,
    duration: 4,
    delay: 0,
    ease: 'expo'
}
, "=2")       

// MENU 
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

// FULLSCREEN BTN 
let fullscreen;
let fsEnter = document.getElementById('fullscr');

fsEnter.addEventListener('click', function(e) {
        e.preventDefault();

        if (!fullscreen) {
            fullscreen = true;
            document.documentElement.requestFullscreen();
        } else {
            fullscreen = false;
            document.exitFullscreen();

        }
    }

);


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

            , 500)
    }

)

// SLIDE LANDING 
//  disini untuk landing pendaratan
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
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-slide-2";
}


// SCROLL ROCKET 
(function() {
    let rocketPieces = document.querySelectorAll('.rocket-body span')
    let rocket = document.querySelector('.rocket')
    let triggerStart = window.innerHeight / 5;
    let rocketOffsetTop = rocket.offsetTop;
    let thirdOffsetTop = rocketPieces[2].offsetTop;

    document.addEventListener('scroll', (e) => {
            if (window.scrollY > (rocketOffsetTop - triggerStart)) {
                rocketPieces[0].classList.add('active');
                rocketPieces[1].classList.add('active');
            } else {
                rocketPieces[0].classList.remove('active');
                rocketPieces[1].classList.remove('active');
            }

            if (window.scrollY > (thirdOffsetTop - triggerStart)) {
                rocketPieces[2].classList.add('active');
            } else {
                rocketPieces[2].classList.remove('active');
            }
        }

    )
}

())


// SLIDE FEATURE 
//  disini untuk feature rocket payload
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