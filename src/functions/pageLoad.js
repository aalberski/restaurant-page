import PizzaParlor from "../images/Pizza_Parlor.png";

const pageLoad = function(){
    const body = document.querySelector("body");

    const backgroundImage = document.createElement("img");
    backgroundImage.id = "background-image";
    backgroundImage.src = PizzaParlor;

    const footer = document.createElement("footer");
    
    body.appendChild(backgroundImage);
    body.appendChild(footer)
}

export default pageLoad;