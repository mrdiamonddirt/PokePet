// ================================
// ----- CLASSES
// ================================

// Create class to store pet
class Pet {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
    this.health = 50;
    this.hunger = 50;
    this.sleepiness = 80;
    this.happiness = 80;
    this.age = 0;
  }
  playGame() {
    this.health = Math.max(this.health - 10, 0);
    this.hunger = Math.max(this.hunger - 10, 0);
    this.sleepiness = Math.max(this.sleepiness - 10, 0);
    this.happiness = Math.min(this.happiness + 5, 100);
    return this;
  }
  eatBerry() {
    this.hunger = Math.min(this.hunger + 10, 100);
    this.sleepiness = Math.max(this.sleepiness - 10, 0);
    this.happiness = Math.min(this.happiness + 5, 100);
    return this;
  }
  heal() {
    this.health = Math.min(this.health + 30, 100);
    return this;
  }
  sleep() {
    this.sleepiness = Math.min(this.sleepiness + 50, 100);
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


// ================================
// ----- VARIABLES
// ================================

// Create a new pet instance and set the image to a blank variable
let newPet = new Pet();
let petImage = "";
let chosenPet = "";

// Set variable to name the div for each screen 
const divname = {
  name: ["menu", "pet", "selection"],
  ID: [0, 1, 2],
};

// Buttons to be used for images of stats 
const intbtnname = {
  name: ["heal", "eat", "sleep", "play"],
  url: [
    "imgs/pokecentre.webp",
    "imgs/berry.png",
    "imgs/zzz.png",
    "imgs/Pokemon1.png",
  ],
};

// Set button name
const menubtnname = {
  name: ["start"],
};

// Set selction pokemon images 
const selectionbtn = {
  name: ['pikachu', 'squirtle', 'charmander', 'bulbasaur'],
  url: ['./imgs/Pokemon1.png','./imgs/Pokemon2.png','./imgs/Pokemon3.png','./imgs/Pokemon4.png']
}

// Create a new div element 
const newDiv = document.createElement("div");

// Create the div to be used to hold screen components
const screenDiv = document.createElement("div");
screenDiv.setAttribute("id", "div-screen");





// ================================
// ----- CREATE THE PET 
// ================================

function createPet(chosenPet){
  // Create switch to create class depending on chosen pet
  if (chosenPet == "charmander") {
    newPet = new Charmander("Charmander", "happy");
    petImage = "Pokemon3";
  } else if (chosenPet == "squirtle") {
    newPet = new Squirtle("Squirtle", "happy");
    petImage = "Pokemon2";
  } else if  (chosenPet == "bulbasaur"){
    newPet = new Bulbasaur("Bulbasaur", "sleepy");
    petImage = "Pokemon4";
  } else {
    newPet = new Pikachu("Pikachu", "sleepy");
    petImage = "Pokemon1";
  }
}



// ================================
// ----- SET UP THE AUDIO
// ================================

var click = new Audio("sounds/button-click.mp3");
var healsound = new Audio("sounds/poke-recovery.mp3");
var bgmusic = new Audio("sounds/pallet-Town8bit.mp3");

//  Start background music 
// bgmusic.play()
bgmusic.loop = true

// Set up mute button
let musicplaying = true
let bgmusicimg = document.getElementById('soundimg')

// Add event listner to mute button
bgmusicimg.addEventListener('click', function() {
  if (musicplaying == true){
    bgmusic.pause()
    musicplaying = false;
    bgmusicimg.src = './imgs/mute.png'
  } else {
    bgmusic.play()
    musicplaying = true;
    bgmusicimg.src = './imgs/sound.png'
  }
})




// ================================
// ----- GAMEPLAY INSTRUCTIONS
// ================================
// WILL RUN VARIOUS FUNCTIONS DEPENDING 
// ON WHICH SCREEN IS SELECTED
 
//create div based on the array value
function creatediv(diplayedID) {

  let diplayedDivID = diplayedID

  newDiv.textContent = "";
  newDiv.classList.add(divname.name[diplayedDivID]);
  mainDiv.appendChild(newDiv);

  // CREATE COMPONENTS DEPENDING ON WHICH SCREEN IS SELECTED
  // 0 = MAIN   1 = GAME SCREEN   2 = SELECTIONS CREEN
  if (diplayedDivID == 0) {
    createbtns(0);
  } else if (diplayedDivID == 1) {
    createPet(chosenPet)
    createImage();
    createbtns(1);
    createStatsBars(newPet);
  } else if (diplayedDivID == 2){
    createbtns(2);
  }
}






// ================================
// ----- CREATE THE COMPONENTS
// ================================
// DEPENDS ON WHICH SCREEN IS SELECTED

function createbtns(suppliedID) {

  let diplayedDivID = suppliedID;

  // MAIN MENU
  if (diplayedDivID == 0) {

      // Load background image for main screen
      const screen = document.querySelector(".screen");
      screen.style.backgroundImage = "url(imgs/bg-Main.jpg)";
      screen.style.backgroundSize = "cover";
      screen.style.backgroundRepeat = "no-repeat";

    // Create start button
    for (i = 0; i < menubtnname.name.length; i++) {
      const newBtn = document.createElement("button");
      newBtn.textContent = `${menubtnname.name[i]}`;
      newBtn.classList.add(divname.name[0]);
      newDiv.appendChild(newBtn);

      // Change to the selection screen if the start button is clicked
      newBtn.addEventListener("click", function (event) {
        if (event.target.textContent == "start") {
          creatediv(2);
          click.play();
        }
      });
    }
  } 


  // GAME PLAY SCREEN
  else if (diplayedDivID == 1) {

    // Create container for stat buttons
    const btnContainer = document.createElement("div");
    btnContainer.setAttribute("id", "btn-flex-container");

    // Loop through the stats to create buttons for them
    for (i = 0; i < intbtnname.name.length; i++) {
      const newBtn = document.createElement("img");
      newBtn.textContent = `${intbtnname.name[i]}`;
      newBtn.src = intbtnname.url[i];
      newBtn.classList.add(divname.name[0]);
      newBtn.setAttribute("id", `action-btn-${i + 1}`);

      // Append the button to the button container 
      btnContainer.appendChild(newBtn);

      // Add event listener to buttons 
      newBtn.addEventListener("click", function (event) {

        if (event.target.textContent == "heal") {
          newPet.heal();
          updateStatsBars(newPet);  // Update the stats bar 
          actionBackground("heal"); // Background change
          healsound.pause();        
          healsound.play();         // Play the heal sound

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


      // Load background image for game play screen
      const screen = document.querySelector(".screen");
      screen.style.backgroundImage = "url(imgs/PokemonBackground.jpg)";
      screen.style.backgroundSize = "cover";
      screen.style.backgroundRepeat = "no-repeat";


      // Set up x y a b buttons
      let input = document.querySelector("body");
      const letterX = document.querySelector(".letterX");
      const letterA = document.querySelector(".letterA");
      const letterB = document.querySelector(".letterB");
      const letterY = document.querySelector(".letterY");

      // Add event listener to buttons when keyboard pressed 
      input.addEventListener("keypress", (e) => {
        
        // When pressed => add animation => perform action => update stat bars => change background
        if (e.key === "x" || e.key === "X") {
          letterX.style.animation = "btnpressed 1s";
          setTimeout(() => {
            letterX.style.animation = "none";
          }, 1000);
          newPet.heal();
          updateStatsBars(newPet);
          actionBackground("heal"); // Background change
        } 
        else if (e.key === "a" || e.key === "A") {
          letterA.style.animation = "btnpressed 1s";
          setTimeout(() => {
            letterA.style.animation = "none";
          }, 1000);
          newPet.eatBerry();
          updateStatsBars(newPet);
          actionBackground("eat"); // Background change
        } 
        else if (e.key === "b" || e.key === "B") {
          letterB.style.animation = "btnpressed 1s";
          setTimeout(() => {
            letterB.style.animation = "none";
          }, 1000);
          newPet.playGame();
          updateStatsBars(newPet);
          actionBackground("play"); // Background change
        } 
        else if (e.key === "y" || e.key === "Y") {
          letterY.style.animation = "btnpressed 1s";
          setTimeout(() => {
            letterY.style.animation = "none";
          }, 1000);
          newPet.sleep();
          updateStatsBars(newPet);
          actionBackground("sleep"); // Background change
        }
      });

      // Add event listener to buttons when clicked  
      // Perform action => update stats bars => change background
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
    }
    // Add the components to the screen div
    screenDiv.appendChild(btnContainer);
  } 



  // SELECTION SCREEN
  else if (diplayedDivID == 2) {

    // Load background image for main screen
    const screen = document.querySelector(".screen");
    screen.style.backgroundImage = "url(imgs/PokemonBackground.jpg)";
    screen.style.backgroundSize = "cover";
    screen.style.backgroundRepeat = "no-repeat";

    // Create a div to store the components
    const selectionDiv = document.createElement('div')
    selectionDiv.classList.add('selectiondiv');


    // Loop over the available pokemon
    for (l = 0; l < selectionbtn.name.length; l++) {   

      // Create an image for each pokemon => Add the image to the selection screen div
      const selectionbtnimg = document.createElement("img");   
      selectionbtnimg.textContent = `${selectionbtn.name[l]}`;
      selectionbtnimg.classList.add(selectionbtn.name[l]);
      selectionbtnimg.setAttribute("id", `selection-btn-${l + 1}`);
      selectionbtnimg.src = selectionbtn.url[l];
      selectionDiv.appendChild(selectionbtnimg);

      // Add an event listener to each pokemon
      selectionbtnimg.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        if (event.target.textContent == "charmander") {
          chosenPet = event.target.textContent;
        } else if (event.target.textContent == 'squirtle' ) {
          chosenPet = event.target.textContent;
        } else if (event.target.textContent == 'pikachu' ) {
          chosenPet = event.target.textContent;
        }else if (event.target.textContent == 'bulbasaur' ) {
          chosenPet = event.target.textContent;
        }

        // Turn off the pokemon logo => add clock and timer
        document.getElementById("mainlogo").style.display = "none";
        document.getElementById("timer").style.display = "block";
        document.getElementById("age").style.display = "block";

        // Remove the selection screen once a pokemon is chosen
        mainDiv.removeChild(selectionDiv);

        // Run the function to change to gamescreen
        creatediv(1)
        // Start the timing function
        needsTrigger()
      })
  }
  // Append the selection screen div to the mainDiv
    mainDiv.appendChild(selectionDiv);
}
}






// ================================
// ----- SWAP BACKGROUND
// ================================

function actionBackground(action) {

  const screen = document.querySelector(".screen");
  screen.style.backgroundSize = "cover";
  screen.style.backgroundRepeat = "no-repeat";

  // Switch depending on which background is needed
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

  // Set time limit for the background image 
  setTimeout(() => {
    screen.style.backgroundImage = "url(imgs/PokemonBackground.jpg)";
  }, 2000);
}





// ================================
// ----- CREATE STAT BARS
// ================================

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
// ----- UPDATE STAT BARS
// ================================

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
  // Update mood icons
  updateImage(pet)
}






// ================================
// ----- TIMING FUNCTION
// ================================

function createClock() {

  // Create the clock
  const clock = document.createElement("div");
  clock.setAttribute("class", "clock");
  clock.setAttribute("id", `clock`);
  mainDiv.appendChild(clock);
}

// Create clock component
createClock();


// Create current time
function currentTime() {

  // Create variables
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  // Set format for time 
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

// Display the current time
currentTime();

// Create timer function
function createTimer() {
  const timer = document.createElement("div");
  timer.setAttribute("class", "timer");
  timer.setAttribute("id", `timer`);
  mainDiv.appendChild(timer);
}

// Create timer
createTimer();

// Create age function
function createAge() {
  const age = document.createElement("div");
  age.setAttribute("class", "age");
  age.setAttribute("id", `age`);
  age.textContent = `Age: ${newPet.age.toFixed(1)} Days`;
  mainDiv.appendChild(age);
}

// Create age
createAge();

// Create function to update age 
function updateage() {
  const age = document.getElementById("age");
  age.textContent = `Age: ${newPet.age.toFixed(1)} Days`;
}



// ----- TIMER -----
// Set a limit for the timer
const timer = document.getElementById("timer");
let feedtimer = 00 + ":" + 5;
timer.innerHTML = feedtimer;


// ----------- TRIGGER FUNCTION --------
// Takes stats off pet when hungry and starving
function needsTrigger() {
  // Start timer
  startTimer();

  // Decrease sleepiness 
  setTimeout(() => {
    newPet.sleepiness = Math.max(newPet.sleepiness - 5, 0);
  }, 10000);

  // Take off huner
  newPet.hunger = Math.max(newPet.hunger - 5, 0);

  // Add to age
  setTimeout(() => {
    newPet.age = newPet.age + 0.1;
    updateage();
    updateStatsBars(newPet);
  }, 1000);

  // Decrease happiness if pet is hungry
  if (newPet.hunger < 50) {
    newPet.happiness = Math.max(newPet.happiness - 10, 0);
  }

  // Decrease happiness if pet is sick => Make pet shake 
  if (newPet.health <= 20) {
    newPet.happiness = Math.max(newPet.happiness - 10, 0);
    const imageID = document.getElementById("image-ID");
    imageID.style.animation = "hurting 2s infinite";
  } 
  // Take off shaking if pet is better
  else if (newPet.health > 21) {
    const imageID = document.getElementById("image-ID");
    imageID.style.animation = "none";
  }

  // Decrease happiness if pet is hungry => Make pet shake
  if (newPet.hunger <= 5) {
    newPet.health = Math.max(newPet.health - 20, 0);
    const imageID = document.getElementById("image-ID");
    imageID.style.animation = "shake 10s";
  }
  // Kill pet if health is zero
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
// ----- CREATE IMAGES
// ================================


  // Create mood for health hunger sleep happiness
  let moodImageHeal = document.createElement("img");
  moodImageHeal.setAttribute("id", "image-mood-heal");
  moodImageHeal.setAttribute("class", "image-mood");
  moodImageHeal.src = `./imgs/heal.png`;

  let moodImageHunger = document.createElement("img");
  moodImageHunger.setAttribute("id", "image-mood-hunger");
  moodImageHunger.setAttribute("class", "image-mood");
  moodImageHunger.src = `./imgs/berry.png`;

  let moodImageSleep = document.createElement("img");
  moodImageSleep.setAttribute("id", "image-mood-sleep");
  moodImageSleep.setAttribute("class", "image-mood");
  moodImageSleep.src = `./imgs/zzz.png`;

  // Create mood for health hunger sleep happiness
  const moodImageHappy = document.createElement("img");
  moodImageHappy.setAttribute("id", "image-mood-happy");
  moodImageHappy.setAttribute("class", "image-mood");
  moodImageHappy.src = `./imgs/hearts.png`;


// ----------- FUNCTION TO CREATE IMAGE DIV
function createImage() {

  // Create Div to hold pet and mood 
  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", "image-div");

  // Create Pet
  const image = document.createElement("img");
  image.setAttribute("id", "image-ID");
  image.src = `./imgs/${petImage}.png`;
  image.style.width = "100%";

  imageDiv.appendChild(moodImageHappy)

  imageDiv.appendChild(image);

  // Append Image to mainDiv
  screenDiv.appendChild(imageDiv);
}



// -----------  FUNCTION TO UPDATE IMAGE DIV
function updateImage(newPet){

  // Get the IDs of the images and divs needed 
  let imageDivMain = document.getElementById("image-div")

  // Get the ID of the image Div
  let imageMain = document.getElementById("image-ID")


  // Change the mood image if the various stats are below 50%
  //  If the image div DOES NOT already have the icon - append it
  // If the stat is above 50 - remove the icon
  if (newPet.health < 50 && imageDivMain.querySelector("#image-mood-heal") == null) {
    imageDivMain.appendChild(moodImageHeal)
  }else if (newPet.health >= 50 && imageDivMain.querySelector("#image-mood-heal") !== null) {
    imageDivMain.removeChild(moodImageHeal)
  }

  if (newPet.hunger < 50 && imageDivMain.querySelector("#image-mood-hunger") == null) {
    imageDivMain.appendChild(moodImageHunger)
  }else if (newPet.hunger >= 50 && imageDivMain.querySelector("#image-mood-hunger") !== null) {
    imageDivMain.removeChild(moodImageHunger)
  }

  if (newPet.sleepiness < 50 && imageDivMain.querySelector("#image-mood-sleep") == null) {
    imageDivMain.appendChild(moodImageSleep)
  }else if (newPet.sleepiness >= 50 && imageDivMain.querySelector("#image-mood-sleep") !== null) {
    imageDivMain.removeChild(moodImageSleep)
  }

  if (newPet.happiness < 50 && imageDivMain.querySelector("#image-mood-happy") !== null){
    imageDivMain.removeChild(moodImageHappy)
    // Change the source to angry pokemon
    imageMain.src = `./imgs/${petImage}-angry.png`
  }else if (newPet.happiness > 50 && imageDivMain.querySelector("#image-mood-happy") == null){
    imageDivMain.appendChild(moodImageHappy)
    imageMain.src = `./imgs/${petImage}.png`
  }

}




// ================================
// ----- DEATH OF PET
// ================================

function checkDead() {
  if (newPet.health <= 0) {
    const screen = document.querySelector(".screen");
    screen.style.backgroundImage = `url(imgs/dead${newPet.name}.png)`;
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




// ================================================================
// ================================================================
// *********  IMPORTANT ****************
// Append the image - buttons - stat bars to the main div

mainDiv.appendChild(screenDiv);



// ================================
// ----- GAME PLAY
// ================================
creatediv(0);



// ================================
// ----- INSTRUCTIONS BUTTON
// ================================



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnInstructions = document.getElementById("btn-instructions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnInstructions.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 





