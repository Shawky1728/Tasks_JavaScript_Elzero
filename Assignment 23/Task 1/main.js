// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

// Needed Output

class Car {

    constructor(name, model, price) {

        this.name = name;
        this.model = model;
        this.price = price;
    }

    run() {
        return "Car Is Running Now";
    }

    stop() {
        return "Car Is Stopped";
    }
}

const car1 = new Car("MG", 2022, 420000);
const car2 = new Car("BMW", 2023, 600000);
const car3 = new Car("Audi", 2024, 800000);

console.log(`Car One Name Is ${car1.name} And Model Is ${car1.model} And Price Is ${car1.price}`);
console.log(car1.run());

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"