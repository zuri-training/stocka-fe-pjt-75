const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const url = "https://stocka-zuri-api.herokuapp.com/auth/login/";


    const email = document.querySelector("#email").value;
    const password = document.querySelector("#pwd").value;

    // const formData = new FormData(this);

    try {
        const response = await fetch (url, {
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
            localStorage.setItem("access_token", response.user.token.access);
            localStorage.setItem("refresh_token", response.user.token.refresh);
//             console.log(response.status);

            if (response.status >= 200 && <= 201) {
                window.location.href="../user-dashboard/index.html"
            }
            else {
                alert(response.error);
            }
        
        })
//         .then (data => {
//             console.log(data);
//         })
    } catch (error) {
        console.error(error);
    }
});
