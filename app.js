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
  heal(){
    this.health = 100;
    console.log(`health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleep}\n sleep ${this.happiness}`)
    console.log(`${this.name} visited a pokéstop`)
    return this;
  }
  sleep(){
    this.sleep =100;
    console.log(`health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleep}\n sleep ${this.happiness}`)
    console.log(`${this.name} is sleeping`)
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

let charmander = new Charmander('dave','happy')
console.log(charmander)
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
    createbtn()

}



// ================================
// ----- Create Property Bars 



function createStatsBars(pet){

	// Create array which hold property names
	let statsArray = ["Health", "Hunger", "Sleep", "Happiness"]
	let statsValues = [pet.health, pet.hunger, pet.sleep, pet.happiness]

		for (let i=0 ; i<statsArray.length ; i++ ){

		// Create div to hold property bar
		const statsDiv = document.createElement('div')

		// Create paragraph tag to hold property name => Append to the new progress div
		const newPara = document.createElement('p')
		newPara.setAttribute('class', 'statsName-Para');
		newPara.innerText = `${statsArray[i]}`
		statsDiv.appendChild(newPara)

		// Create the div to hold the property bar and paratag
		const barBoxDiv = document.createElement('div')
		barBoxDiv.classList.add("barBox-div");
		statsDiv.appendChild(barBoxDiv)

		// Create the div to hold the actual bar
		const barDiv = document.createElement('div')
		barDiv.classList.add("bar-div");
		barDiv.setAttribute('id',`stats-bar-${i+1}`);
		barBoxDiv.appendChild(barDiv)

		// Create the div to hold the paragraph tag with the percentage value
		const statsValueDiv = document.createElement('div')
		statsValueDiv.classList.add("stats-perc");
		const statsValuePara = document.createElement('p')
		statsValuePara.setAttribute('id',`stats-value-para-${i+1}`);
		statsValuePara.innerText = `${statsValues[i]}`
		statsValueDiv.appendChild(statsValuePara)

		barBoxDiv.appendChild(statsValueDiv)

		// Add styling to the bar depending on the value of the property
		barDiv.style.background= `linear-gradient(to right, green ${statsValues[i]}%, green ${statsValues[i]}%, blue 1%)`;

		// Append progress div to main div
		mainDiv.appendChild(statsDiv);
	}

}

createStatsBars(charmander)



// ================================
// ----- Update Stats bars

function updateStatsBars(pet){

	// Create array to store values
	let statsValues = [pet.health, pet.hunger, pet.sleep, pet.happiness];

	// Update Values
	for (let i = 0 ; i<statsValues.length ; i++){

		// Get the stats paragraphs and bars 
		let statsValuePara = document.getElementById(`stats-value-para-${i+1}`)
		let statsBar = document.getElementById(`stats-bar-${i+1}`)

		// Update the paragraph and stats bar
		statsValuePara.innerText = `${statsValues[i]}`
		statsBar.style.background= `linear-gradient(to right, green ${statsValues[i]}%, green ${statsValues[i]}%, blue 1%)`;
	}
}











