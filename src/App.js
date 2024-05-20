import { personsHard, Person, combos, Person2 } from "./app/logical/randomBox"
import { useState, useEffect, useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import RenderList from './app/RenderList'
import ReduxInit from './app/ReduxInit'
import './App.css';
import Homepage from './app/Homepage';
import Boxes from "./app/Boxes";
import useFetch from "./app//logical/useFetch"

// json-server --watch db.json --port 8000 -d 1000
// The app should work if the server is down.  

function App() {

  const [isPending, setIsPending] = useState(true);
  const [errorPass, setError] = useState(null);
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
    }
    )
    .then(response => response.json())
    .then(persons => {
          setIsPending(false)
          modPersons(persons)
        })
        .catch(error => {
          setIsPending(false)
          setError(true)
        })
          
  }, []);

  // Pulled this from nucampsite action creators
  // Ditch useFetch?

  // Should fetch combos in addition to persons on page load?

  // Does useEffect run on state updates, or just when the page mounts?  Just when the page mounts unless another dependancy is defined. 

  // It's doing the get request.  
  // Updates the state every time it loads

  const [persons, modPersons] = useState(null)
  const [isError, changeError] = useState(false)

  const [bodySkip, toggleSkip] = useState(false)
  const [bodyEntry, toggleEntry] = useState({name: 'NameGame'})
  const [runPost, togglePost] = useState(false)
  const [combos, newCombos] = useState(null)
  const numDelete = useRef(0)

  // addPerson(personsDB) Infinite loop.
  // If this fetch can work, the state will be updated when names are added to database.  No need to pass props from InputForm.  
  // But yeah, this needs to work.  May need to prompt the fetch to happen after db is posted to.  

  // I think state variables are local to component unless passed as props.

  const updateState = (vals) => {  

    console.log(vals)

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

    // Short Circuit

    toggleEntry(vals)
    toggleSkip(true)
    togglePost(!runPost)
    console.log(runPost)


    // const personX = new Person(vals.name, vals.shortName, vals.email, persons.length)
    // modPersons(persons.concat(personX))
    // console.log(personX)
    // console.log(persons.length)
    // console.log(persons)
    
  }

  useEffect(() => {

    console.log('Asynch')
    
    if (bodySkip) {

      fetch('http://localhost:8000/combos/')  
      // Is this based on the combo id or the index in the array?  The id.  Thats a problem.
      .then(response => {
          if (response.ok) {
              return response;
          } else {
              const error = new Error(`Error ${response.status}: ${response.statusText}`);
              error.response = response;
              throw error;
          }
      }
      )
      .catch(error => {
        console.log('If I put the catch here, it will show error message and stop the code', error.message); 
      })
      .then(response => response.json())
      .then(combosArray => {
        console.log('Just fetched combos')
        // Is this an infine loop?  Rerenders when state changes and re render changes the state?
        // I don't think the useEffect runs when the state changes.  I don't think a function would either.  Functions only run when called.
        // The state changes and the function (or useEffect) block continues?
        let randComboNum = Math.floor(Math.random()*combosArray.length)
        let combo = combosArray[randComboNum]
        return combo
        // If there is an error with these commands it will show.  catch is for an error retrieving from server.
        // Needs to return one combo
        // Loads all the combos.  Selects one randomly.  Delete the selected combo.  Post entire array back to db.
        }
      )
    
      // have not manipulated server array at this point.
      // Need combos in local state to make delete?  Now I can delete based on id.  

      
      .then(combo => {
          combo.comboNum = combo.id
          delete combo.id
          // Could also delete "both" at this point.
          const personX = new Person2(bodyEntry.name, bodyEntry.shortName, bodyEntry.email, persons.length)
          const personCombo = {...personX, ...combo}
          return personCombo
          // Post this using POST method.  Need to return this personCombo?
          // Make id out of combo
          })

      // Issue with duplicate id being posted to persons.  I think the above delete command takes care of this.  
      // Needs {} here?  Seems like it works.
      .then(personCombo =>
      fetch('http://localhost:8000/persons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          personCombo
        )
    }) 
        .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);        
            error.response = response;         
            throw error;   
        }
        },
    error => { throw error; }      
    )

  .then(response => response.json())
  .then(response => {
    console.log('stringthing')
    const personY = response
    modPersons(persons.concat(personY))
    console.log('completed transaction')
    return response
    })
    .then(deleteThis => {
      const {comboNum} = {...deleteThis}
      numDelete.current = comboNum
      doDelete(numDelete.current)
    })
    // Basically just strips the id number from the person that was just posted.
    // Am I supposed to only return variables from the function block?


     // I think useRef makes a variable that has nothing to do with the state.

    // Response and personCombo is interchangeable here.  Maybe bc personCombo is returned?
    // The state may be updated after the useEffect has run?
    // needs to use ComboNumIn.  May want to do this at another point.  Feel like I want the delete to be last.  
  .catch(error => {
    console.log('This catch is at the very end of the chain', error.message);
    alert('End Chain: ' + error.message); 
  })
  )

  // Needs multiple catch for multiple fetch requests?  May want to test this before adding delete request.  
      


      // Do I need an error and catch here?  Check for the log after the Asynch.
      // Looks like the delete does not return the object being deleted.
  }

  return () => {
    console.log('UnmountAsynch')
    toggleSkip(false)
    }
  }, [runPost] ); 


  const doDelete = (Num) => {
    console.log(Num)
    fetch('http://localhost:8000/combos/'+Num, {
      method: 'DELETE'
    })
    .then(res => {
      return res.json()
    }) 
    .then(data => console.log(data))
  }
  
  // I'll leave the delete function down here.  It will still run sequencially either way.  
  // Needs catch here?


  // I'm wondering if the state updates take place after the entire useEffect block is run.  
 
  // You can use js.  Just need to be particular when updating state variables.

  // Could probably just use an asynch function instead of useEffect.  Still not clear on purpose of useEffect.

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
      modPersons(nextPersons);
    // React docs updating arrays
  }

  // console.log(persons)  

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/list' element={<RenderList persons={persons} updateState={updateState} updatePerson={updatePerson} isError={isError} isPending={isPending} errorPass={errorPass} doDelete={doDelete} />} />
        <Route path='/boxes' element={<Boxes persons={persons} isError={isError} isPending={isPending} errorPass={errorPass} />} />
      </Routes> 
    </div>
  );
  
}

export default App;

// Don't try to mutate a state variable 
// Local state clears whenever updated.  Pass isPending and errorPass to boxes
// Function blocks don't run until called.  
