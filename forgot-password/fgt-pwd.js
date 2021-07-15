const loginForm = document.querySelector("#forgotPassword");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const url = "https://stocka-zuri-api.herokuapp.com/auth/password-reset-email/";


    const email = document.querySelector("#email").value;

    try {
        const response = await fetch (url, {
            method: "POST",
            body: JSON.stringify ({
                "email": email,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then ((response) => {
            console.log(response.json());
            console.log(response.status);

            if (response.ok) {
                alert(response.success)
            } else {
                alert(response.error);
            }
        
        })
        .then (data => {
            console.log(data);
        })
    } catch (error) {
        console.error(error);
    }
});
