// const menuToggle = document.querySelector('.toggle');
// const showcase = document.querySelector('.showcase');
// menuToggle.addEventListener('click', () => {
//         menuToggle.classList.toggle('active');
//         showcase.classList.toggle('active');
// })

// mobile view
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-active');
})