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
    const personX = new Person(vals.name, vals.shortName, vals.email, persons.length)
    addPerson(persons.concat(personX))
    console.log(personX)

  }

  // I don't think concat is mutating.  Can use mutating functions in useState call?

  const updatePerson = (vals, userID) => {
    const personZ = persons.filter((person) => person.id === userID)
    let personY = JSON.parse(JSON.stringify(personZ))[0]
    personY.name = vals.name
    personY.shortName = vals.shortName
    personY.email = vals.email
    console.log(personY)

    // freecodecamp JS copy an Object


    const nextPersons = persons.map((person, i) => {
      if (i === userID) {
        return personY;
      } else {
        // The rest haven't changed
        return person;
      }
    });
      addPerson(nextPersons);
    // React docs updating arrays
  }

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/list' element={<RenderList persons={persons} updateState={updateState} updatePerson={updatePerson} />} />
      </Routes> 
    </div>
  );
}

export default App;

// Don't try to mutate a state variable

