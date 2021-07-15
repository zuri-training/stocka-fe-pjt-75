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



async function postCategory(){
    const post_data ={name: "suit", description: "Taste"}
    const url = "https://stocka-zuri-api.herokuapp.com/api/category/";
    const options={
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI2MjQ2MjIxLCJqdGkiOiJlZjhkZjYwYjgyMWY0NDYwYjc5Y2IxNzUxNzEwMmM3OSIsInVzZXJfaWQiOjIwfQ.TxOC8Lm0EE94dNQ7FhTHeZJidqy4qY_usmU94kVwCI0eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI2MTk3MzIyLCJqdGkiOiJjOThiYWI2ZWMyNjU0NGM5OGI3MWQwYzI5ZWQwYjY4NiIsInVzZXJfaWQiOjIwfQ.mknZBbAcxWZtfsjip7dsWRCrhG548G9h4d0lPIBLoGE" ,

        },
        body: JSON.stringify(post_data),

    }
    await fetch(url,options)
    .then(response => response.json())
    .then(data=> {
        console.log(data)
        console.log('Stoca docs')
    })
    .catch(err=>console.log(`Error ${err}`))
}
postCategory()