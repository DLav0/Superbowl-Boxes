import { personsHard, Person, combos, Person2 } from "./app/logical/randomBox"
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import RenderList from './app/RenderList'
import ReduxInit from './app/ReduxInit'
import './App.css';
import Homepage from './app/Homepage';
import Boxes from "./app/Boxes";
import useFetch from "./app//logical/useFetch"

//json-server --watch db.json --port 8000 -d 1000
//The app should work if the server is down.  

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

  // It's doing the get request.  
  // Updates the state every time it loads

  const [persons, modPersons] = useState(null)
  const [isError, changeError] = useState(false)

  const [bodySkip, toggleSkip] = useState(false)
  const [bodyEntry, toggleEntry] = useState({name: 'NameGame'})
  const [runPost, togglePost] = useState(false)

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

      fetch('http://localhost:8000/combos/1')
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
      .then(combo => {
          const personCombo = {...bodyEntry, ...combo}
          return personCombo
          // Post this using POST method.  Need to return this personCombo?
          })
      .then(personCombo => {
        console.log(personCombo)
        return personCombo
        }
      )
      // redundant .then() here.  Change later.  
      // .catch(error => {
      //   console.log(error)
      // })
      // Issue with duplicate id being posted to persons.
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
    console.log(response)
    console.log('stringthing')
    const personY = personCombo
    modPersons(persons.concat(personY))
    })
  .catch(error => {
    console.log('post comment', error.message);
    alert('Your comment could not be posted\nError: ' + error.message); 
  })
  )
      



      if (false) {
      
      fetch('http://localhost:8000/combos/1', {
        method: 'DELETE',
      })
      .then(res => {
        return res.json()
      }) 
      .then(data => console.log(data))

    }

      // Do I need an error and catch here?  Check for the log after the Asynch.
      // Looks like the delete does not return the object being deleted.
      // I just disabled the delete for now
      // I prefer the if (false) blocks to the comment syntax.  Just disabling blocks of code I might use later.

      if (false) {

      fetch('http://localhost:8000/persons', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            bodyEntry
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
      console.log(response)
      console.log('stringthing')
      const personX = new Person2(response.name, response.shortName, response.email, persons.length)
      modPersons(persons.concat(personX))
      })
    .catch(error => {
      console.log('post comment', error.message);
      alert('Your comment could not be posted\nError: ' + error.message); 
    });
  }
  
  }

  return () => {
    console.log('UnmountAsynch')
    toggleSkip(false)
    }
  }, [runPost] ); 

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
      modPersons(nextPersons);
    // React docs updating arrays
  }

  // console.log(persons)  

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/list' element={<RenderList persons={persons} updateState={updateState} updatePerson={updatePerson} isError={isError} isPending={isPending} errorPass={errorPass} />} />
        <Route path='/boxes' element={<Boxes persons={persons} isError={isError} isPending={isPending} errorPass={errorPass} />} />
      </Routes> 
    </div>
  );
  
}

export default App;

// Don't try to mutate a state variable 
// Local state clears whenever updated.  Pass isPending and errorPass to boxes
