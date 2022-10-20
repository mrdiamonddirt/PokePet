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
    this.sleepiness = 100;
    this.happiness = 100;
    this.age = 0;
  } 
  playGame(){
    this.health = Math.max(this.health - 5, 0);
    this.hunger = Math.max(this.hunger - 5, 0);
    this.sleepiness = Math.max(this.sleepiness - 5, 0);
    this.happiness = Math.min(this.happiness + 5, 100);
    // console logs for clarity
    console.log(`health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleepiness}\n happiness ${this.happiness}`)
    console.log(`played a game`)
    return this;
  }  
  eatBerry(){
    this.health = Math.min(this.health + 5, 100);;
    this.hunger = Math.min(this.hunger + 10, 100);;
    this.sleepiness = Math.max(this.sleepiness - 5, 0);;
    this.happiness = Math.min(this.happiness + 5, 100);;
    console.log(`health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleepiness}\n happiness ${this.happiness}`)
    console.log(`${this.name} ate a berry`)
    return this;
  }
  heal(){
    this.health = 100;
    console.log(`health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleepiness}\n happiness ${this.happiness}`)
    console.log(`${this.name} visited a pokéstop`)
    return this;
  }
  sleep(){
    this.sleepiness = 100;
    console.log(`health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleep}\n happiness ${this.happiness}`)
    console.log(`${this.name} is sleeping`)
    return this;
  }
  checkStats(){
    return console.table({
      name: this.name,
      mood: this.mood,
      health: this.health,
      hunger: this.hunger,
      sleep: this.sleepiness,
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
diplayedDivID = 0;
//placeholder will get button names from pet class method
const intbtnname = {
  name: ["heal", "eat", "play", "sleep"],
};
const menubtnname = {
  name: ["start"],
};


const newDiv = document.createElement("div");
//create div based on the array value
function creatediv() {
  newDiv.textContent = "";
  newDiv.classList.add(divname.name[diplayedDivID]);
  mainDiv.appendChild(newDiv);
  // create btn's of pet displayed
  if (diplayedDivID == 0) {
  createbtns()
  } else if (diplayedDivID == 1) {
    createbtns()
    createStatsBars(charmander)
  }
}
//create div
creatediv();

//create buttons function - loops through the class to create btns for pet interactions
function createbtns() {
  if (diplayedDivID == 0) {
  for (i = 0; i < menubtnname.name.length; i++) {
    const newBtn = document.createElement("button");
    newBtn.textContent = `${menubtnname.name[i]}`;
    newBtn.classList.add(divname.name[0]);
    newDiv.appendChild(newBtn);
    newBtn.addEventListener('click', function(event){
      console.log(event.target.textContent)
      if (event.target.textContent == 'start') {
       diplayedDivID = 1
       console.log(diplayedDivID)
       creatediv();
       playinggame = true;
       needsTrigger()
       document.getElementById('mainlogo').style.display = 'none';
       document.getElementById('timer').style.display = 'block';

      //  return diplayedDivID
      }
  })
  }
} else if (diplayedDivID == 1) {
  for (i = 0; i < intbtnname.name.length; i++) {
    const newBtn = document.createElement("button");
    newBtn.textContent = `${intbtnname.name[i]}`;
    newBtn.classList.add(divname.name[0]);
    newBtn.setAttribute('id', `action-btn-${i+1}`)
    newDiv.appendChild(newBtn);
    newBtn.addEventListener('click', function(event){
      console.log(event.target.textContent)
      if (event.target.textContent == 'heal') {
        charmander.heal()
        updateStatsBars(charmander)
      } else if (event.target.textContent == 'eat') {
        charmander.eatBerry()
        updateStatsBars(charmander)
      } else if (event.target.textContent == 'play') {
        charmander.playGame()
        updateStatsBars(charmander)
      } else if (event.target.textContent == 'sleep') {
        charmander.sleep()
        updateStatsBars(charmander)
      }
    })
  }
}
}



// ================================
// ----- Create Property Bars 



function createStatsBars(pet){

	// Create array which hold property names
	let statsArray = ["Health", "Hunger", "Sleep", "Happiness"]
	let statsValues = [pet.health, pet.hunger, pet.sleepiness, pet.happiness]

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


		// Add styling to the bar depending on the value of the property
		barDiv.style.background= `linear-gradient(to right, green ${statsValues[i]}%, green ${statsValues[i]}%, blue 1%)`;

		// Append progress div to main div
		mainDiv.appendChild(statsDiv);
	}

}

// ================================
// ----- Update Stats bars

function updateStatsBars(pet){

	// Create array to store values
	let statsValues = [pet.health, pet.hunger, pet.sleepiness, pet.happiness];

	// Update Values
	for (let i = 0 ; i<statsValues.length ; i++){
		// Get the stats paragraphs and bars 
		let statsBar = document.getElementById(`stats-bar-${i+1}`)

		// Update the  and stats bar
		statsBar.style.background= `linear-gradient(to right, green ${statsValues[i]}%, green ${statsValues[i]}%, blue 1%)`;
	}
}

//timing stuff
// create clock function
function createClock() {
const clock = document.createElement('div')
clock.setAttribute('class', 'clock');
clock.setAttribute('id',`clock`);
// clock.innerText = `${date}`
mainDiv.appendChild(clock)
}
// trigger create clock function
createClock()
// get current time and update clock
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
// display current time
currentTime();

// create clock function
function createTimer() {
  const timer = document.createElement('div')
  timer.setAttribute('class', 'timer');
  timer.setAttribute('id',`timer`);
  mainDiv.appendChild(timer)
  }
  if (diplayedDivID == 0){
    // createTimer()
  }
createTimer()

// Set and Start timer
const timer = document.getElementById('timer')
let feedtimer = 00 + ":" + 5;
timer.innerHTML = feedtimer

//takes stats off pet when hungry and starving
function needsTrigger(){
startTimer();
setTimeout(() => {
  console.log('feed me')
}, 10000);
setTimeout(() => {
  charmander.sleepiness -= 5
}, 10000);
charmander.hunger -= 10;
updateStatsBars(charmander)
if (charmander.hunger < 0) {
  console.log('starving')
  charmander.health -= 5
}
}

//start timer function
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    console.log('log')
    timer.innerHTML = feedtimer
    needsTrigger()
    return
  }
  // updates the html every second
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  // console.log(m)
  setTimeout(startTimer, 1000);
  
}
// function for intergering the minutes seconds
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}