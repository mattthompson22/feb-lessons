//constructor functions generate instances of objects

// const Animal = function (sound) {
// this.hasCellWall = false;
// this.sound = sound;
// }

// Animal.prototype.makeSound = function () {
//     console.log(this.sound);
// }

// const Mammal = function (sound) {
//    Animal.call(this, sound);
// this.hasFur = true;
// this.liveBirth = true;
// }

// Mammal.prototype = Object.create(Animal.prototype);

// const cow = new Mammal("MOOOOOOO");
// cow.makeSound();

class Animal {
    constructor(sound) {
        this.hasCellWall = false;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
    anotherMethod() {

    }
}

class Mammal extends Animal {
    constructor(sound) {
        super(sound);
        this.hasFur = true;
        this.liveBirth = true;
    }
    //to add new methods to Mammal:
    shaveFur() {

    }
}

const cow = new Mammal("MOOOO");

cow.makeSound();
console.log(cow);