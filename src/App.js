import { personsHard, Person, combos } from "./app/logical/randomBox"
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import RenderList from './app/RenderList'
import ReduxInit from './app/ReduxInit'
import './App.css';
import Homepage from './app/Homepage';
import Boxes from "./app/Boxes";
import useFetch from "./app//logical/useFetch"

//json-server --watch db.json --port 8000
//The app should work if the server is down.  

function App() {


  // Any time it mounts, it should run this block a few times.  Multiple fetch calls will not be a problem.
  useEffect(() => {
    console.log('testThis')
     
    fetch('http://localhost:8000/persons')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
    }
    )
        .then(response => response.json())
        .then(persons => addPerson(persons))
        .catch(error => console.log(error.message))
  }, []);

  // Pulled this from nucampsite action creators
  // Ditch useFetch?

  // It's doing the get request.  Can't get the data into local state.
  //Update the state every time it loads?

  const [persons, addPerson] = useState(personsHard)
  const [isError, changeError] = useState(false)

  // addPerson(personsDB) Infinite loop.
  // If this fetch can work, the state will be updated when names are added to database.  No need to pass props from InputForm.  
  // But yeah, this needs to work.  May need to prompt the fetch to happen after db is posted to.  

  // I think state variables are local to component unless passed as props.

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

  // You can use js.  Just need to be particular when updating state variables.

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

