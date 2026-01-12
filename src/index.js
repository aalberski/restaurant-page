// Styles
import "./styles/main.css";

// Functions
import pageLoad from "./functions/pageLoad.js";

// Pages
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

pageLoad();

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

homeButton.addEventListener("click", (e) =>{
    home();
})

menuButton.addEventListener("click", (e) =>{
    menu();
})

aboutButton.addEventListener("click", (e) =>{
    about();
})
