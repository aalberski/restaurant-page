import clear from "../functions/clear";

const menu = function(){
    const content = document.querySelector("#content");
    clear();

    const menuItems = document.createElement("ul");
    menuItems.id = "menu-list";

    const l1 = document.createElement("li");
    l1.textContent = "Cheese Slice - Classic mozzarella on our signature crust"
    
    const l2 = document.createElement("li");
    l2.textContent = "Pepperoni – A fan favorite, crispy and bold"

    const l3 = document.createElement("li");
    l3.textContent = "Veggie Delight – Peppers, onions, olives, and mushrooms"

    const l4 = document.createElement("li");
    l4.textContent = "Meat Lovers – Pepperoni, sausage, and bacon"

    menuItems.appendChild(l1);
    menuItems.appendChild(l2);
    menuItems.appendChild(l3);
    menuItems.appendChild(l4);

    content.appendChild(menuItems);
}

export default menu;