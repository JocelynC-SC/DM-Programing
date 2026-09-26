// The For Loop

let toys = ["Mr. Squid", "Cardboard box", "Mouse toy"];
let listContainer = document.getElementById("itemlist");

for (let i = 0; i < toys.length; i++){
    let listItem = document.createElement("li");
    listItem.textContent = toys[i];
    listContainer.appendChild(listItem);
}

// The While Loop

let treatBowl= 0;
while (treatBowl < 100){
    console.log("filling bowl... currently at " + treatBowl + "%");
    treatBowl += 25;
}
console.log("Kratos's bowl is full!");

// CSS change
const text = document.querySelector(".title");
const changeColor = document.querySelector(".change");

let zoomies = false;

changeColor.addEventListener("click", function(){
    zoomies = !zoomies;
    text.classList.toggle("change");
    if (zoomies === true){
        text.textContent = "Kratos has the zoomies! >:3";
    }
    else{
        text.textContent = "Kratos is Calm :3";
    }
});