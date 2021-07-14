async function isLoggedIn() {
    const token = localStorage.getItem("access_token");
    if (!token) return false;
}

async function autoRedirect() {
    const validLogin = await isLoggedIn();
    if (!validLogin && location.pathname !== "../login/login.html") {
        redirect("../login/login.html");
    }
        
    if (validLogin && location.pathname === "../login/login.html") {
        redirect("/");
    }
}

async function verifyToken () {
    await isLoggedIn();
    url = "https://stocka-zuri-api.herokuapp.com/api/token/verify/";
    const response = await fetch (url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({token})
    })
    .then ((response) => {
        console.log(response.json());
    });

    if (!response.ok) {
        alert("Error: " + response.detail);
        // await tokenRefresh();
    }
}

async function tokenRefresh () {
    url = "https://stocka-zuri-api.herokuapp.com/api/token/refresh/"
    refreshToken = localStorage.getItem("refresh_token")
    const response = await fetch (url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + refreshToken
        },

        body: JSON.stringify({refreshToken})
    })
    const response = await response.json();
    console.log(response.json());
    localStorage.setItem("access", response.access);

    if (!response.ok) {
        alert("Error: " + response.detail);
    }
}
