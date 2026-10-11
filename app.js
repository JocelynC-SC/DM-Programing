// Array and method

let kratosTreats = ["Tuna", "Dried fish", "Catnip ball"];
kratosTreats.push("Catnip banana");

// object and method
const petProfile = {
    name: "Kratos",
    age: 3,
    treats: kratosTreats,

    feedTreat: function(treatName){
        if (this.treats.includes(treatName)){
            this.energyLevel +=10;
            console.log(this.name + " is happy and has more energy!");
        }
    }
};
//String method
let excitedName = petProfile.name.toUpperCase();
let weightPounds = 10;

console.log("pet Profile:", excitedName);
console.log("Weight in pounds:", weightPounds);

//while loop
let napCount= 0;
while (napCount < 3){
    console.log("Kratos is sleeping..." + napCount);
    napCount++;
}
console.log("Kratos is awake!");

// for loop
const toyListElement = document.getElementById("toyList");
const toyList = ["fishing toy", "rattle ball", "Mr. Squid"];

if (toyListElement) {
    for (let i = 0; i < toyList.length; i++) {
        let li = document.createElement("li");
        li.textContent = toyList[i];
        toyListElement.appendChild(li);
    }
}

// CSS change and event listener
const titleText = document.querySelector(".title");
const Btn = document.querySelector(".changeColor");

let zoomies = false;

Btn.addEventListener("click", function(){
    zoomies = !zoomies;
    text.classList.toggle("change");
    if (zoomies === true){
        text.textContent = "Kratos has the zoomies! >:3";
        petProfile.feedTreat("Catnip banana");
    }
    else{
        text.textContent = "Kratos is Calm :3";
    }
});