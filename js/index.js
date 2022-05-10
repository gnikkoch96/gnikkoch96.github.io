const hamburger =document.getElementById('hamburger');
const headerLinks = document.querySelector('.header-links');

hamburger.addEventListener('click', () => {
    headerLinks.classList.toggle('show');
})