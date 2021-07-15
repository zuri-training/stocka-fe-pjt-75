const features = document.getElementById("features_link")
const subMenu = document.getElementById("sub-menu1")

features.addEventListener("click", () => { 
    
    if (subMenu.style.display === "flex") {
        subMenu.removeAttribute("style")
    } else {
        subMenu.style.display = "flex"
    }
})