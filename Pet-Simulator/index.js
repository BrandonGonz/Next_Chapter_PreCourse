// 1. Pet Class

// This is the base class for all pets.

// Properties: name, age, health, energy.

// Methods: eat(), sleep().

class Pet {
 constructor(name, age = 0, health = 100, energy = 50,) {
    this.name = name;
    this.age = age;
    this.health = health;
    this.energy = energy;
  }
  status() {
    console.log(`Pet's Age: ${this.age}, Health: ${this.health}, Energy: ${this.energy}`);
}
}

const myPet = new Pet();
myPet.status();

class Dog extends Pet {
    constructor(breed) {
        super();
        this.age = 1; // Override age property from Pet
        this.breed = breed;
    }

    bark() {
        console.log("Woof! Woof!");
    }

    fetch() {
        // Decrease energy by a small amount
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0; // Ensure energy doesn't go below 0
        }
    }
}

const myDog = new Dog();
myDog.status();
myDog.bark();
myDog.fetch();
myDog.status();

class Puppy extends Dog {
    constructor(breed, playfulness) {
        super(breed);
        this.playfulness = playfulness;
    }

status() {
        console.log(`Puppy's Age: ${this.age}, Health: ${this.health}, Energy: ${this.energy}, Playfulness: ${this.playfulness}`);
    }

    play() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0; 
    }

    this.playfulness += 5;

    if (this.energy < 20) {
        this.health -= 10;
        if (this.health < 0) {
            this.health = 0;
         }
      }
   }
}
const myPuppy = new Puppy ("Husky", 70);
myPuppy.status();

class AdultDog extends Dog {
    constructor(breed, trainedCommands = []) {
        super(breed);
        this.trainedCommands = trainedCommands;
    }

    roll() {
       
        this.energy -= 15;
        if (this.energy < 0) {
            this.energy = 0; // Ensure energy doesn't go below 0
        }
        
    }
}

const adultDog = new AdultDog("Husky", ["Sit", "Stay"]);
adultDog.status();
adultDog.bark();
adultDog.fetch();
adultDog.roll();
adultDog.status();

// Define the OldDog class extending Dog
class OldDog extends Dog {
    constructor(breed) {
        super(breed);
        this.age = 10; // Set age to 10 to represent an older dog
    }

    fetch() {
        // Decrease energy by a smaller amount due to decreased stamina
        this.energy -= 3;
        if (this.energy < 0) {
            this.energy = 0; // Ensure energy doesn't go below 0
        }
    }

    sleepMore() {
        // Allow the dog to recover more energy than younger dogs
        this.energy += 15;
        if (this.energy > 100) {
            this.energy = 100; // Ensure energy doesn't exceed 100
        }
    }

    status() {
        console.log(`OldDog's Breed: ${this.breed}, Pet's Age: ${this.age}, Health: ${this.health}, Energy: ${this.energy}`);
    }
}

// Testing the OldDog class
const olderDog = new OldDog("Husky");
olderDog.status(); // Output:HUsky, Pet's Age: 10, Health: 100, Energy: 50
olderDog.bark(); // Output: Woof! Woof!
olderDog.fetch();
olderDog.status(); // Output:Husky, Pet's Age: 10, Health: 100, Energy: 47
olderDog.sleepMore();
olderDog.status(); // Output:Husky, Pet's Age: 10, Health: 100, Energy: 62