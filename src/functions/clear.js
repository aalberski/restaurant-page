const clear = function(){
    const content = document.querySelector("#content");

    // while(content.children.length > 1){
    //     content.children[1].remove();
    // }

    content.textContent = "";
}

export default clear;