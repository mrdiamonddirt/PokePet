// ================================
// ----- Classes
// ================================


// Create class to store pet
class Pet {
	constructor(name, mood){
		this.name = name;
		this.mood = mood;
		this.health = 100;
		this.hunger = 100;
		this.sleep = 100;
		this.happiness = 100;
	}
}
//class for potential divs to create
const divname = {
    name: ['menu','pet'],
    ID: [0,1]
}
diplayedDivID = 1;
//placeholder will get button names from pet class method
const btnname = {
    name: ['eat','drink','play']
}

const newDiv = document.createElement('div')
//create div based on the array value
function creatediv(){
newDiv.textContent = divname.name[diplayedDivID];
newDiv.classList.add(divname.name[diplayedDivID]);
mainDiv.appendChild(newDiv);
}
//create div
creatediv();

//create buttons function - loops through the class to create btns
function createbtn(){
    for (i=0; i < btnname.name.length; i++){
    const newBtn = document.createElement('button')
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



function createPropertyBars(health, hunger, sleep, happiness){

	// Create array which hold property names
	let propertiesArray = ["Health", "Hunger", "Sleep", "Happiness"]

		for (let i=0 ; i<propertiesArray.length ; i++ ){

		// Create div to hold property bar
		const propertiesDiv = document.createElement('div')

		// Create paragraph tag to hold property name => Append to the new progress div
		const newPara = document.createElement('p')
		propertiesDiv.appendChild(newPara.appendChild(document.createTextNode(`${propertiesArray[i]}`)))

		// Create the div to hold the property bar and paratag
		const barBoxDiv = document.createElement('div')
		barBoxDiv.classList.add("barBox-div");
		propertiesDiv.appendChild(barBoxDiv)

		// Create the div to hold the actual bar
		const barDiv = document.createElement('div')
		barDiv.classList.add("bar-div");
		barDiv.setAttribute('id',`properties-bar-1`);
		barBoxDiv.appendChild(barDiv)

		// Create the div to hold the paragraph tag with the percentage value
		const propertyValueDiv = document.createElement('div')
		propertyValueDiv.classList.add("property-perc");
		const propertyValuePara = document.createElement('p')
		propertyValueDiv.appendChild(propertyValuePara.appendChild(document.createTextNode(`100`)))

		barBoxDiv.appendChild(propertyValueDiv)

		// Add styling to the bar depending on the value of the property
		barDiv.style.background= "linear-gradient(to right, green 75%, green 90%, blue 1%)";

		// Append progress div to main div
		mainDiv.appendChild(propertiesDiv);
	}

}

createPropertyBars()



