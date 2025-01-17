class Animal {
    #HIT_POINT = 10;
    #EAT_POINT = 10;
    #name;
    #species;
    #energy;
    static remainingAnimals = 0;

    constructor(name, species, energy) {
        this.#name = name;
        this.#species = species;
        this.#energy = energy;
        Animal.remainingAnimals++;
    }

    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
    getSpecies() {
        return this.#species;
    }
    setSpecies(species) {
        this.#species = species;
    }
    getEnergy() {
        return this.#energy;
    }
    setEnergy(energy) {
        this.#energy = energy;
    }

    attack(target){
        if (this.getEnergy() > 0){
            this.attack(target, this.#HIT_POINT);
        } else {
            console.log(`${this.getName()} can't attack because is already dead.`);
        }
    }

    attack(target, hitPoint) {
        if (this.getEnergy() <= 0 && target.getEnergy() <= 0) {
            console.log(`${this.getName()} and ${target.getName()} are both dead.`);
        } else if (this.getEnergy() <= 0 && target.getEnergy() > 0) {
            console.log(`${this.getName()} is already dead.`);
        } else if (this.getEnergy() > 0 && target.getEnergy() <= 0) {
            console.log(`${target.getName()} is already dead.`);
        } else {
            this.setEnergy(this.getEnergy() - hitPoint);
            target.setEnergy(target.getEnergy() - hitPoint);
            if (this.getEnergy() <= 0 && target.getEnergy() <= 0) {
                console.log(`${this.getName()} and ${target.getName()} are both out of energy!`);
                Animal.remainingAnimals -= 2;
            } else if (this.getEnergy() <= 0 && target.getEnergy() > 0) {
                console.log(`${target.getName()} wins! ${this.getName()} is out of energy!`);
                console.log(`${target.getName()}'s energy: ${target.getEnergy()}`);
                Animal.remainingAnimals--;
            } else if (this.getEnergy() > 0 && target.getEnergy() <= 0) {
                console.log(`${this.getName()} wins! ${target.getName()} is out of energy!`);
                console.log(`${this.getName()}'s energy: ${this.getEnergy()}`);
                Animal.remainingAnimals--;
            } else {
                console.log(`${this.getName()}'s energy: ${this.getEnergy()}`);
                console.log(`${target.getName()}'s energy: ${target.getEnergy()}`);
            }
        }
        console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);
    }

    eat() {
        this.eat(this.#EAT_POINT);
    }
    eat(point) {
        this.setEnergy(this.#energy += point);
        console.log(`${this.getName()} eats and gains ${point} energy!`);
        console.log(`${this.getName()}'s energy: ${this.getEnergy()}`);
    }
}

class Bird extends Animal {
    #HIT_POINT = 20;
    #EAT_POINT = 10;
    #canFly;

    constructor(name, species, canFly) {
        super(name, species, 100);
        this.#canFly = canFly;
    }

    getCanFly() {
        return this.#canFly;
    }
    setCanFly(canFly) {
        this.#canFly = canFly;
    }

    attack(target) {
        if (this.getEnergy() > 0){
            console.log(`${this.getName()} swoops in to attack ${target.getName()}!`);
            super.attack(target, this.#HIT_POINT);
        } else {
            console.log(`${this.getName()} can't attack because is already out of energy.`);
        }
    }

    eat() {
        super.eat(this.#EAT_POINT);
    }
}

class Mammal extends Animal {
    #HIT_POINT = 50;
    #EAT_POINT = 20;
    #furColor;

    constructor(name, species, furColor) {
        super(name, species, 200);
        this.#furColor = furColor;
    }

    getFurColor() {
        return this.#furColor;
    }
    setFurColor(furColor) {
        this.#furColor = furColor;
    }

    attack(target) {
        if (this.getEnergy() > 0){
            console.log(`${this.getName()} lunges to attack ${target.getName()}!`);
            super.attack(target, this.#HIT_POINT);
        } else {
            console.log(`${this.getName()} can't attack because is already out of energy.`);
        }
    }

    eat() {
        super.eat(this.#EAT_POINT);
    }
}

class Reptile extends Animal {
    #HIT_POINT = 30;
    #EAT_POINT = 15;
    #coldBlooded;

    constructor(name, species, coldBlooded) {
        super(name, species, 100);
        this.#coldBlooded = coldBlooded;
    }

    getColdBlooded() {
        return this.#coldBlooded;
    }
    setColdBlooded(coldBlooded) {
        this.#coldBlooded = coldBlooded;
    }

    attack(target) {
        if (this.getEnergy() > 0){
            console.log(`${this.getName()} bites to attack ${target.getName()}!`);
            super.attack(target, this.#HIT_POINT);
        } else {
            console.log(`${this.getName()} can't attack because is already out of energy.`);
        }
    }

    eat() {
        super.eat(this.#EAT_POINT);
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.getName()}, Species: ${eagle.getSpecies()}, Can Fly: ${eagle.getCanFly()}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.getName()}, Species: ${lion.getSpecies()}, Fur Color: ${lion.getFurColor()}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.getName()}, Species: ${snake.getSpecies()}, Cold-Blooded: ${snake.getColdBlooded()}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
snake.attack(eagle);
eagle.attack(lion);
lion.attack(snake);
snake.attack(eagle);
eagle.attack(lion);
lion.attack(snake);
snake.attack(eagle);
eagle.attack(lion);
lion.attack(snake);
snake.attack(eagle);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
