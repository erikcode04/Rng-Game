import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
   const [counter, setCounter] =  useState([]);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100));
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
if(list[buttonName] !== "place"){
  return;
}
setList((prevList) => ({
  ...prevList, 
  [buttonName] : randomNumber,
}));
setCounter((prevCounter) => {
 let updatedCounter = [...prevCounter, randomNumber];

 if (updatedCounter.length === 10) {
  let calcutlatingArray = [];
 
for (let index = 0; index < updatedCounter.length; index++) {
  if (calcutlatingArray.length === 0) {
    calcutlatingArray.push(updatedCounter[index]);
  }
  if (calcutlatingArray.length > 0) {
    const secondLast = index - 1;
    if (calcutlatingArray[secondLast] > updatedCounter) {
      
    }
  }
}


 }
 return updatedCounter;
});


setRandomNumber(Math.floor(Math.random() * 100 + 1));
}

  return (
    <div className="App">
      <h1> {randomNumber}</h1>
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
