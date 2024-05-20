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

      console.log(numCombos)

      let comboNumIn = Math.floor(Math.random()*numCombos)

      fetch('http://localhost:8000/combos/' + 41)  
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
      .then(combo => {
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
    console.log(response)
    console.log('stringthing')
    const personY = personCombo
    modPersons(persons.concat(personY))
    newNumCombos(numCombos-1)
    return comboNumIn
    })
    .then(comboNumIn => {
      console.log(comboNumIn)
      console.log(numCombos)
      console.log('completed transaction')
    }) 
    // The state may be updated after the useEffect has run?
    // needs to use ComboNumIn.  May want to do this at another point.  Feel like I want the delete to be last.  
  .catch(error => {
    console.log('This catch is at the very end of the chain', error.message);
    alert('End Chain: ' + error.message); 
  })
  )

  // Needs multiple catch for multiple fetch requests?  May want to test this before adding delete request.  
      



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