import { personsHard, Person, combos } from "./app/logical/randomBox"
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import RenderList from './app/RenderList'
import ReduxInit from './app/ReduxInit'
import './App.css';
import Homepage from './app/Homepage';

function App() {

  const [persons, addPerson] = useState(personsHard)

  const updateState = (vals) => {
      
      const personX = new Person(vals.name, vals.shortName, vals.email)
      
      addPerson(persons.concat(personX))
      console.log(combos.length)

  }

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/list' element={<RenderList persons={persons} updateState={updateState} />} />
      </Routes> 
    </div>
  );
}

export default App;

