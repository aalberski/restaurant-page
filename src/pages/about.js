import clear from "../functions/clear";

const about = function(){
    const content = document.querySelector("#content");
    clear();

    const statement = document.createElement("p");
    statement.textContent = "Welcome to Pizza Parlor, your go-to spot for fresh slices, cozy vibes, and good times. Inspired by the classic neighborhood pizzerias (and a little cartoon charm), we’re all about serving up great pizza in a place that feels warm, friendly, and full of character. Whether you’re here to grab a quick bite or hang out with friends, Pizza Parlor is a place where everyone’s welcome and every slice is made with care."
    statement.id = "mission-statement";

    content.appendChild(statement);
}

export default about;