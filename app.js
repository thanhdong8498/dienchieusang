(function () {
    var curImgId = 1;
    var numberOfImages = 5; // Change this to the number of background images
    window.setInterval(function () {
        $(".background").css("background-image", "url(./assets/img/img" + curImgId + ".jpg)");
        resetAnimation();
        curImgId = (curImgId + 1) % numberOfImages;
    }, 6 * 1000);
})();

function resetAnimation() {
    var el = document.getElementById("animated");
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = null;
}

ScrollReveal({
    reset: true,
    distance: "500px",
    duration: 1500,
    delay: 400,
});

ScrollReveal().reveal(".slide-heading, .btn-contain, .service-head, .banner-mark, .footer-left", {
    delay: 200,
    easing: "cubic-bezier(1, 1, 0.9, 1)",
    origin: "left",
    opacity: 0,
});

ScrollReveal().reveal(".about-title, .slide-desc, .partner-contain, .footer-right, .banner-heading", {
    delay: 200,
    easing: "cubic-bezier(1, 1, 0.9, 1)",
    origin: "right",
    opacity: 0,
});

ScrollReveal().reveal(
    ".abtract-container, .about-mark, .banner-right-inner, .contact-body, .contact-head-heading, .banner-item",
    {
        delay: 200,
        easing: "cubic-bezier(1, 1, 0.9, 1)",
        origin: "bottom",
        opacity: 0,
    }
);

// capchar

// slick slider

$(document).ready(function () {
    $(".partner-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggable: false,
        //   prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        //   nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                },
            },
        ],
        autoplay: true,
        autoplaySpeed: 1000,
    });
});

/* Change page */

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".header-nav-link").forEach((link) => {
    if (link.href.includes(`${activePage}`) && activePage.includes(".html")) {
        link.classList.add("active");
    }
});

var form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(form);
    fetch(
        "https://script.google.com/macros/s/AKfycbx7Z6BiOqgDsvomboXRAZLV_f1iUsfpep3DO0Xw3aW470JxxRL7J96kn3GqUgRS2rg2/exec",
        {
            method: "POST",
            body: data,
        }
    )
        .then((res) => res.text())
        .then((data) => {
            alert("Gửi tin nhắn thành công!");
        });
});

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("active");
});

//Loading animation

var loader = document.querySelector(".preload");
window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disappear");
}

//counter number
$(".counter").countUp();
