// The For Loop

let toys = ["Mr. Squid", "Cardboard box", "Mouse toy"];
let listContainer = document.getElementById("itemlist");

for (let i = 0; i < toys.length; i++){
    let listItem = document.createElement("li");
    listItem.textContent = toys[i];
    listContainer.appendChild(listItem);
}

// The While Loop i think
let treats = 3;


// CSS change

