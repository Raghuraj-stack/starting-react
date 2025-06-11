import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter , setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1;
    if(counter >= 0 && counter <= 20){
    setCounter(counter)
    }
  }

  const removeValue = () => {
    counter = counter - 1;
    if(counter >= 0 && counter <= 20){
    setCounter(counter)
    }
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Your Age : {counter} <br />("Only Allowed for age group of Below 20")</h2>

    <button
    onClick={addValue}
    >Add Age</button>
    <br /> 
    <br />
    <button 
    onClick={removeValue}
    >Remove Age</button>
    </>
  ) 
}

export default App
