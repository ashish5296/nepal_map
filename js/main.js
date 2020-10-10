//Selector
const stateMap = document.querySelector('.mapdiv');
const stateList = document.querySelector('.state-list')

//Event Listeners
stateMap.addEventListener('click', addState);


//Functions
function addState(event){
  //Prevent form from submitting
  event.preventDefault();

  // State div
  const stateDiv = document.createElement('div');

  //Create Li
  const newState = document.createElement('li');
  newState.innerText = 'State Name';
  stateDiv.appendChild(newState);

  //Check MARK button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = "Learn More";
  completedButton.classList.add('complete-btn');
  stateDiv.appendChild(completedButton);

  //Append to List
  stateList.appendChild(stateDiv);
}
