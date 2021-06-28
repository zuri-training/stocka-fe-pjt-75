const btn= document.querySelector('.nav-btn');
const closeButton = document.querySelector('.close-notifications');
const modal = document.querySelector('.modal-wrapper');

btn.addEventListener('click', ()=>{
    modal.style.display='block'
    console.log('hey')
})
closeButton.addEventListener('click', ()=>{
    modal.style.display ='none'
})

