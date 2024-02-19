import { personsHard, Person, combos } from "./logical/randomBox"
import ListItem from './ListItem'
import { useState } from "react";
import InputForm from "./InputForm";
import { Col, Container, Row} from 'reactstrap'
import PersonCard from "./PersonCard";
import PersonEdit from "./PersonEdit";


// const personZ = new Person('Person X','do not lie','idiotJokester@snailmail.com')

const RenderList = (props) => {

    const persons = props.persons
    const updateState = props.updateState
    const updatePerson = props.updatePerson
    const [isOpen, toggleModal] = useState(false)
    const [isOpenE, toggleModalE] = useState(false)
    const [selectID, selectedPerson] = useState(0) 

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
    

    return (
      
        <div className="container">
            <div className="row">
                <div className="col-md-10 mt-5">
                    <div className=''>
                        <InputForm updateState={updateState}/>
                    </div>
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
        </div>
       
    )
}

export default RenderList

// Want the index in the map to match the id number to match the number shown on the list page.  
// As it is with the reverse method, the keys will be inverted with the ids.  Not sure if I should worry about this or not
//

