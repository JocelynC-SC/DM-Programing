//object
const cat = {
    name: "Kratos",
    breed: "Tuxedo cat",
    //method
    meow: function(){
        console.log(cat.name + "Meow! :3");
    }
};

//functions
function addTreats(treats){
    return treats + 2;
}
cat.meow();

let totalTreats = addTreats(3);
console.log("Total treats:" + totalTreats);

//event
let myButton = document.getElementById("btn");

myButton.addEventListener("click", function(){
    console.log("button was clicked");
});