const divname = {
    name: ['menu','pet']
}

function creatediv(){
const newDiv = document.createElement('div')
newDiv.textContent = divname.name[0];
newDiv.classList.add(divname.name[0]);
mainDiv.appendChild(newDiv);
}
creatediv()