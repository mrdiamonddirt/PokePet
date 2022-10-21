// ================================
// ----- Classes
// ================================

// Create class to store pet
class Pet {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
    this.health = 20;
    this.hunger = 20;
    this.sleepiness = 100;
    this.happiness = 100;
    this.age = 0;
  }
  playGame() {
    this.health = Math.max(this.health - 5, 0);
    this.hunger = Math.max(this.hunger - 5, 0);
    this.sleepiness = Math.max(this.sleepiness - 5, 0);
    this.happiness = Math.min(this.happiness + 5, 100);
    // console logs for clarity
    console.log(
      `health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleepiness}\n happiness ${this.happiness}`
    );
    console.log(`played a game`);
    return this;
  }
  eatBerry() {
    this.health = Math.min(this.health + 5, 100);
    this.hunger = Math.min(this.hunger + 10, 100);
    this.sleepiness = Math.max(this.sleepiness - 5, 0);
    this.happiness = Math.min(this.happiness + 5, 100);
    console.log(
      `health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleepiness}\n happiness ${this.happiness}`
    );
    console.log(`${this.name} ate a berry`);
    return this;
  }
  heal() {
    this.health = 100;
    console.log(
      `health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleepiness}\n happiness ${this.happiness}`
    );
    console.log(`${this.name} visited a pokéstop`);
    return this;
  }
  sleep() {
    this.sleepiness = 100;
    console.log(
      `health ${this.health} \n hunger ${this.hunger} \n sleep ${this.sleep}\n happiness ${this.happiness}`
    );
    console.log(`${this.name} is sleeping`);
    return this;
  }
  checkStats() {
    return console.table({
      name: this.name,
      mood: this.mood,
      health: this.health,
      hunger: this.hunger,
      sleep: this.sleepiness,
      happiness: this.happiness,
      age: this.age,
    });
  }
}
class Charmander extends Pet {
  constructor(name, mood) {
    super(name, mood);
  }
}
class Squirtle extends Pet {
  constructor(name, mood) {
    super(name, mood);
  }
}
class Bulbasaur extends Pet {
  constructor(name, mood) {
    super(name, mood);
  }
}
class Pikachu extends Pet {
  constructor(name, mood) {
    super(name, mood);
  }
}

// Set new pet
let chosenPet = "squirtle";
let newPet = new Pet();
let petImage = "";

// Create switch to create class depending on chosen pet
if (chosenPet == "charmander") {
  newPet = new Charmander("Charmander", "happy");
  petImage = "Pokemon3.png";
} else if (chosenPet == "squirtle") {
  newPet = new Squirtle("Squirtle", "happy");
  petImage = "Pokemon2.png";
} else {
  newPet = new Pikachu("Pikachu", "sleepy");
  petImage = "Pokemon1.png";
}

//class for potential divs to create
const divname = {
  name: ["menu", "pet", "selection"],
  ID: [0, 1, 2],
};
diplayedDivID = 0;
//placeholder will get button names from pet class method
const intbtnname = {
  name: ["heal", "eat", "sleep", "play"],
  url: [
    "imgs/pokecentre.webp",
    "imgs/berry.png",
    "imgs/zzz.png",
    "imgs/Pokemon1.png",
  ],
};
const menubtnname = {
  name: ["start"],
};

const newDiv = document.createElement("div");
const screenDiv = document.createElement("div");
screenDiv.setAttribute("id", "div-screen");

//create div based on the array value
function creatediv() {
  newDiv.textContent = "";
  newDiv.classList.add(divname.name[diplayedDivID]);
  mainDiv.appendChild(newDiv);
  // create btn's of pet displayed
  if (diplayedDivID == 0) {
    createbtns();
  } else if (diplayedDivID == 1) {
    createImage();
    createbtns();
    createStatsBars(newPet);
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
      newBtn.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        if (event.target.textContent == "start") {
          diplayedDivID = 1;
          console.log(diplayedDivID);
          creatediv();
          playinggame = true;
          needsTrigger();
          document.getElementById("mainlogo").style.display = "none";
          document.getElementById("timer").style.display = "block";
          document.getElementById("age").style.display = "block";

          click.play();
          //  return diplayedDivID
        }
      });
    }
  } else if (diplayedDivID == 1) {
    // Create container for buttons
    const btnContainer = document.createElement("div");
    btnContainer.setAttribute("id", "btn-flex-container");
    for (i = 0; i < intbtnname.name.length; i++) {
      const newBtn = document.createElement("img");
      newBtn.textContent = `${intbtnname.name[i]}`;
      newBtn.src = intbtnname.url[i];
      newBtn.classList.add(divname.name[0]);
      newBtn.setAttribute("id", `action-btn-${i + 1}`);
      btnContainer.appendChild(newBtn);
      newBtn.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        if (event.target.textContent == "heal") {
          newPet.heal();
          updateStatsBars(newPet);
          actionBackground("heal"); // Background change
          healsound.pause();
          healsound.play();
        } else if (event.target.textContent == "eat") {
          newPet.eatBerry();
          updateStatsBars(newPet);
          actionBackground("eat"); // Background change
          click.pause();
          click.play();
        } else if (event.target.textContent == "play") {
          newPet.playGame();
          updateStatsBars(newPet);
          actionBackground("play"); // Background change
          click.pause();
          click.play();
        } else if (event.target.textContent == "sleep") {
          newPet.sleep();
          updateStatsBars(newPet);
          actionBackground("sleep"); // Background change
          click.pause();
          click.play();
        }
      });

      // Load background image on start //
      const screen = document.querySelector(".screen");
      screen.style.backgroundImage = "url(imgs/PokemonBackground.jpg)";
      screen.style.backgroundSize = "cover";
      screen.style.backgroundRepeat = "no-repeat";

      // Function for swapping backgrounds //
      function actionBackground(action) {
        screen.style.backgroundSize = "cover";
        screen.style.backgroundRepeat = "no-repeat";

        if (action == "heal") {
          screen.style.backgroundImage = "url(imgs/BgHeal.png)";
        } else if (action == "eat") {
          screen.style.backgroundImage = "url(imgs/BgEat.jpg)";
        } else if (action == "play") {
          screen.style.backgroundImage = "url(imgs/BgPlay.jpg)";
        } else if (action == "sleep") {
          screen.style.backgroundImage = "url(imgs/BgSleep.jpg)";
        } else {
          screen.style.backgroundImage = "url(imgs/PokemonBackground.jpg)";
        }

        setTimeout(() => {
          screen.style.backgroundImage = "url(imgs/PokemonBackground.jpg)";
        }, 500);
      }

      // X, A, B, Y Buttons //
      let input = document.querySelector("body");
      const letterX = document.querySelector(".letterX");
      const letterA = document.querySelector(".letterA");
      const letterB = document.querySelector(".letterB");
      const letterY = document.querySelector(".letterY");
      input.addEventListener("keypress", (e) => {
        if (e.key === "x" || e.key === "X") {
          letterX.style.animation = "btnpressed 1s";
          setTimeout(() => {
            letterX.style.animation = "none";
          }, 1000);
          newPet.heal();
          updateStatsBars(newPet);
          actionBackground("heal"); // Background change
        } else if (e.key === "a" || e.key === "A") {
          letterA.style.animation = "btnpressed 1s";
          setTimeout(() => {
            letterA.style.animation = "none";
          }, 1000);
          newPet.eatBerry();
          updateStatsBars(newPet);
          actionBackground("eat"); // Background change
        } else if (e.key === "b" || e.key === "B") {
          letterB.style.animation = "btnpressed 1s";
          setTimeout(() => {
            letterB.style.animation = "none";
          }, 1000);
          newPet.playGame();
          updateStatsBars(newPet);
          actionBackground("play"); // Background change
        } else if (e.key === "y" || e.key === "Y") {
          letterY.style.animation = "btnpressed 1s";
          setTimeout(() => {
            letterY.style.animation = "none";
          }, 1000);
          newPet.sleep();
          updateStatsBars(newPet);
          actionBackground("sleep"); // Background change
        }
      });
      letterX.addEventListener("click", () => {
        newPet.heal();
        updateStatsBars(newPet);
        actionBackground("heal"); // Background change
      });
      letterA.addEventListener("click", () => {
        newPet.eatBerry();
        updateStatsBars(newPet);
        actionBackground("eat"); // Background change
      });
      letterB.addEventListener("click", () => {
        newPet.playGame();
        updateStatsBars(newPet);
        actionBackground("play"); // Background change
      });
      letterY.addEventListener("click", (e) => {
        newPet.sleep();
        updateStatsBars(newPet);
        actionBackground("sleep"); // Background change
      });
      // X, A, B, Y Buttons //
    }
    // Add the buttons to the screen div
    screenDiv.appendChild(btnContainer);
  }
}

// ================================
// ----- Create Property Bars

function createStatsBars(pet) {
  // Create array which hold property names , values , colours for styling
  let statsArray = ["Health", "Hunger", "Sleep", "Happiness"];
  let statsValues = [pet.health, pet.hunger, pet.sleepiness, pet.happiness];
  let statsCols = [
    "var(--green)",
    "var(--red)",
    "var(--blue)",
    "var(--orange)",
  ];

  // Create a div to hold all of the status bars
  const statsAllDiv = document.createElement("div");
  statsAllDiv.setAttribute("id", "stats-all-div");

  for (let i = 0; i < statsArray.length; i++) {
    // Create div to hold property bar
    const statsDiv = document.createElement("div");
    statsDiv.setAttribute("id", `stats-div-${i + 1}`);

    // Create paragraph tag to hold property name => Append to the new progress div
    const newPara = document.createElement("p");
    newPara.setAttribute("class", "statsName-Para");
    newPara.innerText = `${statsArray[i]}`;
    statsDiv.appendChild(newPara);

    // Create the div to hold the property bar
    const barBoxDiv = document.createElement("div");
    barBoxDiv.classList.add("barBox-div");
    statsDiv.appendChild(barBoxDiv);

    // Create the div to hold the actual bar => add class and ID
    const barDiv = document.createElement("div");
    barDiv.classList.add("bar-div");
    barDiv.setAttribute("id", `stats-bar-${i + 1}`);
    barBoxDiv.appendChild(barDiv);

    // Add styling to the bar depending on the value of the property
    barDiv.style.background = `linear-gradient(to left, ${statsCols[i]} ${statsValues[i]}%, ${statsCols[i]} ${statsValues[i]}%, white 1%)`;

    // Append each status to the main status Div
    statsAllDiv.appendChild(statsDiv);
  }

  // Append stats All Div to main div
  screenDiv.appendChild(statsAllDiv);
}

// ================================
// ----- Update Stats bars

function updateStatsBars(pet) {
  // Create array to store values
  let statsValues = [pet.health, pet.hunger, pet.sleepiness, pet.happiness];
  let statsCols = [
    "var(--green)",
    "var(--red)",
    "var(--blue)",
    "var(--orange)",
  ];
  // Update Values
  for (let i = 0; i < statsValues.length; i++) {
    // Get the stats paragraphs and bars
    let statsBar = document.getElementById(`stats-bar-${i + 1}`);

    // Update the  and stats bar
    statsBar.style.background = `linear-gradient(to left, ${statsCols[i]} ${statsValues[i]}%, ${statsCols[i]} ${statsValues[i]}%, white 1%)`;
  }
}

//timing stuff
// create clock function
function createClock() {
  const clock = document.createElement("div");
  clock.setAttribute("class", "clock");
  clock.setAttribute("id", `clock`);
  // clock.innerText = `${date}`
  mainDiv.appendChild(clock);
}
// trigger create clock function
createClock();
// get current time and update clock
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
// display current time
currentTime();

// create clock function
function createTimer() {
  const timer = document.createElement("div");
  timer.setAttribute("class", "timer");
  timer.setAttribute("id", `timer`);
  mainDiv.appendChild(timer);
}
function createAge() {
  const age = document.createElement("div");
  age.setAttribute("class", "age");
  age.setAttribute("id", `age`);
  age.textContent = `Age = ${newPet.age}`;
  mainDiv.appendChild(age);
}
createAge();
function updateage() {
  const age = document.getElementById("age");
  age.textContent = `Age = ${newPet.age.toFixed(1)}`;
}
createTimer();

// Set and Start timer
const timer = document.getElementById("timer");
let feedtimer = 00 + ":" + 5;
timer.innerHTML = feedtimer;

//takes stats off pet when hungry and starving
function needsTrigger() {
  startTimer();
  setTimeout(() => {
    console.log("feed me");
    console.log(newPet.checkStats());
  }, 10000);
  setTimeout(() => {
    newPet.sleepiness = Math.max(newPet.sleepiness - 10, 0);
  }, 10000);
  newPet.hunger = Math.max(newPet.hunger - 10, 0);
  setTimeout(() => {
    newPet.age = newPet.age + 0.1;
    console.log(newPet.age);
    updateage()
    updateStatsBars(newPet);
  }, 1000);
  if (newPet.hunger <= 5) {
    console.log("starving");
    // console.log(newPet.checkStats())
    newPet.health = Math.max(newPet.health - 5, 0);
    // variable for pet image animations
    const imageID = document.getElementById("image-ID");
    imageID.style.animation = "shake 10s";
  }
  if (newPet.hunger < 50) {
    console.log("hungry");
    // console.log(newPet.checkStats())
    newPet.happiness = Math.max(newPet.happiness - 10, 0);
  }
  if (newPet.health <= 20) {
    console.log("hurting");
    // console.log(newPet.checkStats())
    newPet.happiness = Math.max(newPet.happiness - 10, 0);
    const imageID = document.getElementById("image-ID");
    imageID.style.animation = "hurting 2s infinite";
    // console.log(charmander.checkStats())
  }
  if (newPet.health > 21) {
    const imageID = document.getElementById("image-ID");
    imageID.style.animation = "none";
  }
  if (newPet.health <= 0) {
    checkDead();
  }
}

//start timer function
function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  if (m < 0) {
    console.log("log");
    timer.innerHTML = feedtimer;
    needsTrigger();
    return;
  }
  // updates the html every second
  document.getElementById("timer").innerHTML = m + ":" + s;
  // console.log(m)
  setTimeout(startTimer, 1000);
}
// function for intergering the minutes seconds
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

// ================================
// ----- Create Image Div

function createImage() {
  // Create Div to hold pet
  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", "image-div");

  const image = document.createElement("img");
  image.setAttribute("id", "image-ID");
  image.src = `./imgs/${petImage}`;
  image.style.width = "100%";

  imageDiv.appendChild(image);

  // Append Image to mainDiv
  screenDiv.appendChild(imageDiv);
}

mainDiv.appendChild(screenDiv);

// Check if pet is dead //

function checkDead() {
  if (newPet.health <= 0) {
    const screen = document.querySelector(".screen");
    screen.style.backgroundImage = "url(imgs/dead.png)";
    screen.style.backgroundSize = "cover";
    screen.style.backgroundRepeat = "no-repeat";

    while (mainDiv.lastChild) {
      mainDiv.removeChild(mainDiv.lastChild);
    }

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("restart-button");
    mainDiv.appendChild(restartButton);

    restartButton.addEventListener("click", () => location.reload());
  }
}

// Check if pet is dead //

// audio files
var click = new Audio("sounds/button-click.mp3");
var healsound = new Audio("sounds/poke-recovery.mp3");
// click.play()
