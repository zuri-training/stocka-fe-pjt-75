const menu = document.querySelector('.harmburger-menu');
const sideNav = document.querySelector('.side-pane')
    menu.addEventListener('click', () => {
        sideNav.classList.toggle('active')

    })


    //sticky navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        navbar.classList.toggle('sticky', window.scrollY > 0)
    })

    //Modal wrapper
    const closeBtn = document.querySelector('.close-notifications');
const closeProfile= document.getElementById('close');
const btn= document.querySelector('.nav-btn');
const profile= document.querySelector('.nav-img');
const modal = document.querySelector('.modal-wrapper');
const modalProfile= document.querySelector('.modal-wrapper-profile')




btn.addEventListener('click', ()=>{
    modal.style.display='block'
    console.log('hey')
})


profile.addEventListener('click', ()=>{
    modalProfile.style.display='block'
    console.log('profile')
})

closeBtn.addEventListener('click', ()=>{
    modal.style.display ='none'
    
})
closeProfile.addEventListener('click', ()=>{
    modalProfile.style.display = 'none'

    
})