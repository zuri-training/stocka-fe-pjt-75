
const regForm = document.querySelector("#regForm");

regForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const url = "https://stocka-zuri-api.herokuapp.com/auth/register/";

    // const company = document.querySelector("#org");
    const company_name = document.querySelector("#org").value;
    const full_name = document.querySelector("#name").value;
    const email = document.querySelector("#mail").value;
    const password = document.querySelector("#pwd").value;

    // if (company_name === " ") {
    //     setErrorFor(company, "Input field is empty")
    // }

    // function setErrorFor(input, message) {
    //     const formControl = input.parentElement;
    //     const small = formControl.querySelector("small");
    //     formControl.className = "error";
    //     small.innerText = message;
    // }



    // const formData = new FormData(this);

    try {
        const response = await fetch (url, {
            method: "POST",
            // body: formData

            body: JSON.stringify ({
                "company_name": company_name,
                "full_name": full_name,
                "email": email,
                "password": password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
            console.log(response);
            localStorage.setItem("token", response.token);
            console.log(response.status);

            if (response.ok) {
                alert("Your account has been registered! Kindly log in");
                window.location.href = "../login/login.html"
                // window.location.assign("../login/login.html")
            }
        
        // .then (data => {
        //     console.log(data);
        // })
        } catch (error) {
            console.error(error);
            alert("Oops! Something went wrong");
        };

});
