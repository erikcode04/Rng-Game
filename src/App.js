import React from 'react';
import { useState } from 'react';

function App() {
   const [counter, setCounter] =  useState([]);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100));
  const [points, setPoints] = useState(0);
  const [listOrder, setListOrder] = useState([]);
  const [finished, setFinished] = useState(false);
const [list, setList] = useState({
  buttonOne : "place",
  buttonTwo : "place",
  buttonThree : "place",
  buttonFour : "place",
  buttonFive : "place",
  buttonSix : "place",
  buttonSeven : "place",
  buttonEight : "place",
  buttonNine : "place",
  buttonTen : "place"
});

function buttonClicked(event){
const buttonName = event.target.name;
console.log(buttonName);
if(list[buttonName] !== "place"){
  return;
}
const buttonIndices = {
  buttonOne: 0,
  buttonTwo: 1,
  buttonThree: 2,
  buttonFour: 3,
  buttonFive: 4,
  buttonSix: 5,
  buttonSeven: 6,
  buttonEight: 7,
  buttonNine: 8,
  buttonTen: 9,
};
setListOrder((prevListOrder) => {
  const newListOrder = [...prevListOrder];
  newListOrder[buttonIndices[buttonName]] = randomNumber;
  return newListOrder;
});
console.log("listOrder",listOrder);
setList((prevList) => ({
  ...prevList, 
  [buttonName] : randomNumber,
}));

setCounter((prevCounter) => {
 let updatedCounter = [...prevCounter, randomNumber];
 if (updatedCounter.length === 10) {

  let smallArray = [];
  let beforeBigArray = [];
  let copiedArray = [...updatedCounter];

 
for (let index = 0; index < (updatedCounter.length)/2; index++) {
  const smallest = Math.min(...copiedArray);
  copiedArray.splice(copiedArray.indexOf(smallest), 1 );
  smallArray.push(smallest);

  const biggeset = Math.max(...copiedArray);
  copiedArray.splice(copiedArray.indexOf(biggeset), 1);
  beforeBigArray.push(biggeset);
}
//funkar


 let bigArray = [];

for (let index = beforeBigArray.length - 1; index >= 0; index--) {
  const element = beforeBigArray[index];
bigArray.push(element)
}



//funkar
let smallNumberCounter = 0;
let lowNumber = true;
let countPoints = 0;
for (let index = 0; index < updatedCounter.length; index++) {
  console.log(index);
  if (index >= 5) {
    smallNumberCounter++;
    lowNumber = false;
    let element = listOrder[index];
    if (element === bigArray[index - 5]) {
      console.log("point added at:", index);
      countPoints++;
    }
  }
  if (index <= 4 && lowNumber) {
    smallNumberCounter++;
        let element = listOrder[index];
    if (element === smallArray[index]) {
      console.log("point added at:", index);
      countPoints++;
    }
  }
}
console.log("Points: ", countPoints);
console.log("smallArray: ", smallArray);
console.log("bigArray: ", bigArray);
setPoints(countPoints);
setFinished(true);
 }
 return updatedCounter;
});


setRandomNumber(Math.floor(Math.random() * 100 + 1));
}

  return (
    <div className="App">
      <h1> {finished ? `Points: ${points}` : randomNumber}</h1>
<div className='listContainer'>

<div className='listItem'>
  <p className='listNumber'>1</p>
  <button className='listButton' name='buttonOne' onClick={buttonClicked}> {list.buttonOne} </button>
</div>

<div className='listItem'>
  <p className='listNumber'>2</p>
  <button className='listButton' name="buttonTwo"onClick={buttonClicked} > {list.buttonTwo}</button>
</div>

<div className='listItem'>
  <p className='listNumber'>3</p>
  <button className='listButton' name='buttonThree' onClick={buttonClicked}> {list.buttonThree} </button>
</div>

<div className='listItem'>
  <p className='listNumber'>4</p>
  <button className='listButton' name='buttonFour' onClick={buttonClicked}> {list.buttonFour} </button>
</div>

<div className='listItem'>
  <p className='listNumber'>5</p>
  <button className='listButton' name='buttonFive' onClick={buttonClicked}> {list.buttonFive} </button>
</div>

<div className='listItem'>
  <p className='listNumber'>6</p>
  <button className='listButton' name='buttonSix' onClick={buttonClicked}> {list.buttonSix} </button>
</div>

<div className='listItem'>
  <p className='listNumber'>7</p>
  <button className='listButton' name='buttonSeven' onClick={buttonClicked}> {list.buttonSeven}</button>
</div>

<div className='listItem'>
  <p className='listNumber'>8</p>
  <button className='listButton' name='buttonEight' onClick={buttonClicked}> {list.buttonEight}</button>
</div>

<div className='listItem'>
  <p className='listNumber'>9</p>
  <button className='listButton' name='buttonNine' onClick={buttonClicked}> {list.buttonNine}</button>
</div>

<div className='listItem'>
  <p className='listNumber'>10</p>
  <button className='listButton' name='buttonTen' onClick={buttonClicked}> {list.buttonTen}</button>
</div>

</div> 
 </div>
  );
}

export default App;
