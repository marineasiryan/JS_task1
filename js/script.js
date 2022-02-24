let data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-60px";
        close_menu()
    }
    prevScrollpos = currentScrollPos;
}
let mobile_nav = document.getElementById("mobile_nav");
let menuu = document.getElementById("menu");
let close_menuu = document.getElementById("close_menu");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let title = document.getElementById("title");
let big_div = document.getElementById("big_div");

function menu() {
    mobile_nav.style.display = "flex";
    close_menuu.style.display = "block";
    menuu.style.display = "none";
    icon1.style.display = "none";
    icon2.style.display = "none";
    icon3.style.display = "none";
    title.style.display = "none";
    big_div.style.display = "block"
}

function close_menu() {
    mobile_nav.style.display = "none";
    close_menuu.style.display = "none";
    menuu.style.display = "block";
    icon1.style.display = "block";
    icon2.style.display = "block";
    icon3.style.display = "block";
    title.style.display = "block";
    big_div.style.display = "none"

}

big_div.onclick = function () {
    close_menu()
}

let modal = document.getElementById("myModal");

let add = document.getElementById("add");
let heart = document.getElementById("heart");

add.onclick = function () {
    modal.style.display = "block";
    document.getElementById("modal_text").innerHTML = "Tовар " + data + " в количестве 800 ₽ единиц добавлен в корзину"
    setTimeout(function () {
        modal.style.display = "none";
    }, 3000);
}

heart.onclick = function () {
    modal.style.display = "block";
    document.getElementById("modal_text").innerHTML = "Tовар " + data + " в количестве 800 ₽  единиц добавлен в избранное"
    setTimeout(function () {
        modal.style.display = "none";
    }, 3000);
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function check() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!document.getElementById("email").value.match(mailformat)) {
        modal.style.display = "block";
        document.getElementById("modal_text").innerHTML = "Email неподходящего вида"
        setTimeout(function () {
            modal.style.display = "none";
        }, 3000);

    } else {
        modal.style.display = "block";
        document.getElementById("modal_text").innerHTML = "Вы подписались, спасибо"
        setTimeout(function () {
            modal.style.display = "none";
        }, 3000);
    }
}

function clearInput() {
    document.getElementById('email').value = '';
}