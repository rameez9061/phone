let list = document.getElementById("scroll");
let menu = document.getElementById("menu");

let animationPlaying = false;

menu.addEventListener('click', function () {
    if (!animationPlaying) {
        animationPlaying = true;
        if (list.style.height === '0px' || list.style.height === '') {
            list.style.height = '300px';
            list.style.animation = 'roll 1s 1 ease';
        } else {
            list.style.height = '0';
            list.style.animation = 'reverse-up 1s 1 ease';
        }
    }
});

// Detect when the animation ends and reset it
list.addEventListener('animationend', function () {
    animationPlaying = false;
});






let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.boxShadow = '2px 2px 12px 0px purple';
        navbar.style.animation = 'slideDown 1s';
    } else {
        navbar.style.position = 'absolute';
        navbar.style.top = '0';
        navbar.style.animation = 'none';
        navbar.style.boxShadow = '0px 0px 0px 0px purple';
    }
});


