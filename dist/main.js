"use strict";
const header = document.querySelector('header');
document.addEventListener('scroll', e => {
    const scrolled = document.documentElement.scrollTop > 0;
    if (header) {
        if (scrolled) {
            header.classList.add('header-scrolled');
        }
        else {
            header.classList.remove('header-scrolled');
        }
    }
});
