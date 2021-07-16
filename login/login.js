const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const url = "https://stocka-zuri-api.herokuapp.com/auth/login/";


    const email = document.querySelector("#email").value;
    const password = document.querySelector("#pwd").value;
    const _access = '';
    const _refresh = '';

    // const formData = new FormData(this);

      await fetch (url, {
            method: "POST",
            body: JSON.stringify ({
                "email": email,
                "password": password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then ((response) => response.json())
        .then ((response) => {
            console.log(response);
            // Set tokens when login is successful... .Doesnt work here if there was a login error
            // localStorage.setItem("access_token", response.user.token.access);
            // localStorage.setItem("refresh_token", response.user.token.refresh);
            // localStorage.setItem("email", response.user.email);
//             console.log(response.status);
            if(response.user.status_code===403){
                console.log('Login error: Wrong Credentials');
                alert('Wrong Credentials...');
            }
//             if (Response.ok) { // this doesnt work for now..
//                 window.location.href="../user-dashboard/index.html"
// //                 location.assign("../user-dashboard/index.html");
//             }
            else {
               console.log('login successful');
               localStorage.setItem("access_token", response.user.token.access);
            //    console.log(response.user.token.access);
               localStorage.setItem("refresh_token", response.user.token.refresh);
               localStorage.setItem("email", response.user.email);
               window.location.href="../user-dashboard/index.html";
            }
        
        })
//         .then (data => {
//             console.log(data);
//         })
});
