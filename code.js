// div.classList.remove("foo");

// div.classList.add("anotherclass");
var currentIcon = document.querySelector("#home_icon");
var currentScreen = document.querySelector("#home_screen");
var wallpaper = document.querySelector(".full-screen > img");
document.querySelector("#home_div").addEventListener("click", function(){
    // changing screen
    wallpaper.style.display = "none"
    currentScreen.style.display = "none"
    currentScreen = document.querySelector("#home_screen");
    currentScreen.style.display = "block"
    // changing icon color
    currentIcon.style.color = "white"
    currentIcon = document.querySelector("#home_icon")
    currentIcon.style.color = "black" 
})

document.querySelector("#work_div").addEventListener("click", function(){
    // changing screen
    wallpaper.style.display = "none"
    currentScreen.style.display = "none"
    currentScreen = document.querySelector("#work_screen");
    currentScreen.style.display = "block"
    // changing icon color
    currentIcon.style.color = "white"
    currentIcon = document.querySelector("#work_icon")
    currentIcon.style.color = "black" 
})

document.querySelector("#blog_div").addEventListener("click", function(){
    // changing screen
    wallpaper.style.display = "none"
    currentScreen.style.display = "none"
    currentScreen = document.querySelector("#blog_screen");
    currentScreen.style.display = "block"
    // changing icon color
    currentIcon.style.color = "white"
    currentIcon = document.querySelector("#blog_icon")
    currentIcon.style.color = "black" 
})

document.querySelector("#aboutus_div").addEventListener("click", function(){
    // changing screen
    wallpaper.style.display = "none"
    currentScreen.style.display = "none"
    currentScreen = document.querySelector("#aboutus_screen");
    currentScreen.style.display = "block"
    // changing icon color
    currentIcon.style.color = "white"
    currentIcon = document.querySelector("#aboutus_icon")
    currentIcon.style.color = "black" 
})

function back() {
    // changing screen
    currentScreen.style.display = "none"  
    currentScreen = document.querySelector("#home_screen");
    wallpaper.style.display = "block"
    // changing icon color
    currentIcon.style.color = "white"
}

function changeWallpaper(element) {
    document.querySelector(".full-screen > img").src = element.src
}