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
// create btn's
if (diplayedDivID == 1) {
    createbtn()
}