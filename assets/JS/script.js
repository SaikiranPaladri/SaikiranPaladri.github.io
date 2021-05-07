
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const line1 = document.querySelector(".line:nth-child(1)");
const line2 = document.querySelector(".line:nth-child(2)");
const line3 = document.querySelector(".line:nth-child(3)");

hamburger.addEventListener("click", () => {
    line1.classList.toggle("rotate");
    line2.classList.toggle("show-hide");
    line3.classList.toggle("rotate-1");
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

Query("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 4
        },

        1366: {
            items: 4
        }
    }
});