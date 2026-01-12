import clear from "../functions/clear";

import PizzaParlor from "../images/Pizza_Parlor.png";
import PizzaPenguin from "../images/Pizza_Penguin.png";

const home = function(){
    const content = document.querySelector("#content");
    clear();

    const logo = document.createElement("img");
    logo.id = "logo";
    logo.src = PizzaPenguin;

    const title = document.createElement("h1");
    title.textContent = "Pizza Parlor";
    title.id = "home-title";

    const backdrop = document.createElement("div");
    backdrop.id = "backdrop";

    content.appendChild(logo);
    content.appendChild(title);
    content.appendChild(backdrop);
}

export default home;