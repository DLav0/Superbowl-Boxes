import { personsHard, Person, personDB1, combosObj, combos } from "./logical/randomBox"
import ListItem from './ListItem'
import { useState, useEffect } from "react";
import InputForm from "./InputForm";
import { Col, Container, Row} from 'reactstrap'
import PersonCard from "./PersonCard";
import PersonEdit from "./PersonEdit";
import ErrorMsg from './ErrorMsg'
import useFetch from "./logical/useFetch"






// const personZ = new Person('Person X','do not lie','idiotJokester@snailmail.com')

const RenderList = (props) => {

    const persons = props.persons
    const updateState = props.updateState
    const updatePerson = props.updatePerson
    const [isOpen, toggleModal] = useState(false)
    const [isOpenE, toggleModalE] = useState(false)
    const [selectID, selectedPerson] = useState(0) 
    // const [runTest, toggleTest] = useState(false)

    const personID = (ID) => {
        console.log(ID)
        selectedPerson(ID)
        toggleModal(!isOpen)
    }

    const toggleModalClose = () => {
        toggleModal(!isOpen)
    }

    const toggleModalCloseE = () => { 
        toggleModal(false)
        toggleModalE(!isOpenE)
    }

    

    const addPerson = (values) => {
        console.log(values)
        // toggleTest(!runTest)
        

    } 

    // useEffect(() => {
    //     console.log('Mount')
    //     return () => console.log('unmount')
    // }, [runTest]);

    // runTest is a state variable.

    // const { data: persons, isPending, error } = useFetch('http://localhost:8000/persons')

    const isPending = false
    const error = false

    if (isPending){
        return (
            <h1 className="loading">THE PAGE IS LOADING</h1>
        )
    }

    if (error){
        return (
            <h1 className="loading">There is an error.</h1>
        )
    }

    if (persons) {

    return (
      
        <div className="container">
            <div className="row">
                <div className="col-md-10 mt-5">
                    <div className=''>
                        <InputForm addPerson={addPerson}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <ErrorMsg isError={props.isError}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <div className="list">
                        {persons.slice(0).reverse().map((person) => 
                        <ListItem key={person.id} person={person} personID={personID} />
                        )}
                    </div>
                    <PersonCard person={persons[selectID]} isOpen={isOpen} toggle={toggleModalClose} toggleE={toggleModalCloseE}/>
                    <PersonEdit person={persons[selectID]} isOpen={isOpenE} toggle={toggleModalCloseE} updatePerson={updatePerson} ID={selectID}/>
                </div>
            </div>
            {/* {combosObj.map((com) => 
                //console.log(com)
                //Could make each object it's own component to render like the standard json format.  I may just use this for now.  
                //Remove the final commma when copying
                //Try to get rid of .both?
                <div key={com.id}>
                {JSON.stringify(com)},  
                </div>
            )} */}

        </div>
       
    )
    }
}

export default RenderList

// Want the index in the map to match the id number to match the number shown on the list page.  
// As it is with the reverse method, the keys will be inverted with the ids.  Not sure if I should worry about this or not

//The app seems to reload now every time the list url is entered.  Could try to reconfigurs so it doesn't.  

//            {JSON.stringify(personDB1)}

