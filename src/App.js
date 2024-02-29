import { personsHard, Person, combos } from "./app/logical/randomBox"
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import RenderList from './app/RenderList'
import ReduxInit from './app/ReduxInit'
import './App.css';
import Homepage from './app/Homepage';
import Boxes from "./app/Boxes";

function App() {

  const [persons, addPerson] = useState(personsHard)
  const [isError, changeError] = useState(false)

  

  const updateState = (vals) => {  

    changeError(false)
    
    for (const person of persons) {
      if (person.name === vals.name) {
        changeError('This name has already been added')
        return
      }
      if (person.shortName === vals.shortName) {
        changeError('This Short Name has already been used')
        return
      }
      if (person.email === vals.email) {
        changeError('This email has already been used')
        return
      }
    }

    const personX = new Person(vals.name, vals.shortName, vals.email, persons.length)
    addPerson(persons.concat(personX))
    console.log(personX)
    console.log(persons.length)
    console.log(persons)
    
  }

  // I don't think concat is mutating.  Can use mutating functions in useState call?

  const updatePerson = (vals, userID) => {
    const personZ = persons.filter((person) => person.id === userID)
    let personY = {...personZ[0]}
    personY.name = vals.name
    personY.shortName = vals.shortName
    personY.email = vals.email
    // console.log(personZ[0])

    // freecodecamp JS copy an Object
    // JSON.parse(JSON.stringify(personZ))[0]
    // updated class to remove nested array. Now the spread method works.  

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

  //console.log(persons)  

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/list' element={<RenderList persons={persons} updateState={updateState} updatePerson={updatePerson} isError={isError} />} />
        <Route path='/boxes' element={<Boxes persons={persons} />} />
      </Routes> 
    </div>
  );
}

export default App;

// Don't try to mutate a state variable 

