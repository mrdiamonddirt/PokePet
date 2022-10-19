// ================================
// ----- Classes
// ================================

// Create class to store pet
class Pet {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
    this.health = 100;
    this.hunger = 100;
    this.sleep = 100;
    this.happiness = 100;
    this.age = 0;
  }
  playGame(){
    this.health -=5;
    this.hunger -=5;
    this.sleep -=5;
    this.happiness +=5;
    // console logs for clarity
    console.log(`health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleep}\n sleep ${this.happiness}`)
    console.log(`played a game`)
    return this;
  }
  eatBerry(){
    this.health +=5;
    this.hunger +=10;
    this.sleep -=5;
    this.happiness +=5;
    console.log(`health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleep}\n sleep ${this.happiness}`)
    console.log(`${this.name} ate a berry`)
    return this;
  }
  checkStats(){
    return console.table({
      name: this.name,
      mood: this.mood,
      health: this.health,
      hunger: this.hunger,
      sleep: this.sleep,
      happiness: this.happiness,
      age: this.age
    });
  }
}
class Charmander extends Pet {
  constructor(name, mood) {
    super(name,mood)
  }
}
class Squirtle extends Pet {
    constructor(name, mood) {
      super(name,mood)
    }
  }
  class Bulbasaur extends Pet {
    constructor(name, mood) {
      super(name,mood)
    }
  }
  class Pikachu extends Pet {
    constructor(name, mood) {
      super(name,mood)
    }
  }

// console.log(charmander)
//class for potential divs to create
const divname = {
  name: ["menu", "pet"],
  ID: [0, 1],
};
diplayedDivID = 1;
//placeholder will get button names from pet class method
const btnname = {
  name: ["eat", "drink", "play"],
};

const newDiv = document.createElement("div");
//create div based on the array value
function creatediv() {
  newDiv.textContent = divname.name[diplayedDivID];
  newDiv.classList.add(divname.name[diplayedDivID]);
  mainDiv.appendChild(newDiv);
}
//create div
creatediv();

//create buttons function - loops through the class to create btns
function createbtn() {
  for (i = 0; i < btnname.name.length; i++) {
    const newBtn = document.createElement("button");
    newBtn.textContent = `${btnname.name[i]}`;
    newBtn.classList.add(divname.name[0]);
    newDiv.appendChild(newBtn);
  }
}
// create btn's of pet displayed
if (diplayedDivID == 1) {
  createbtn();
}

// Create New Pet give it a name and mood name and mood
let charmander = new Charmander('dave','happy')
charmander.playGame()
charmander.playGame()
charmander.playGame()
charmander.eatBerry()
charmander.playGame()
charmander.checkStats()