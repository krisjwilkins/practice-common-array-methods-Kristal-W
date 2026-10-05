let drinks = ["Berry Smoothie", "Espresso", "Hot Chai Latte"];
let pastries = ["Boston Cream Donut", "Cornbread Muffin", "Lemon Tart"];

console.log(drinks.length);
console.log(pastries.length);

console.log("One", drinks[2], "and a", pastries[0]);
console.log("One", drinks[0], "and a", pastries[2]);
console.log("One", drinks[1], "and a", pastries[1]);

let drinkIndex = 2;
let pastryIndex = 0;

console.log(drinks[drinkIndex]);
console.log(pastries[pastryIndex]);

for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}

drinks.push("Iced Coffee");

console.log(drinks);
console.log(`There are now ${drinks.length} drinks in the order system.`);

pastries.push("Danish");

console.log(pastries);
console.log(`There are now ${pastries.length} pastries in the order system.`);
