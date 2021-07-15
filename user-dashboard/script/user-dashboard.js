const menuIcon = document.querySelector('.harmburger-menu');
const main = document.querySelector('.main');

const sideNav = document.querySelector('.side-pane')
    menuIcon.addEventListener('click', () => {
        sideNav.classList.toggle('active')

    })


    //sticky navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        navbar.classList.toggle('sticky', window.scrollY > 0)
    })
