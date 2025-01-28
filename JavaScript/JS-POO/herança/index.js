const Apartment = require("./Apartment");
const House = require("./House");
const Property = require("./Property");

const land = new Property(200, 50000);

const someHouse = new House(120, 200000);

const apt = new Apartment("101", 200, 50000);

console.log(land);
console.log(apt);
console.log(someHouse);

console.log(apt.getFloor());
console.log(someHouse.getPricePerSquareMeter());
console.log(someHouse instanceof Property);
