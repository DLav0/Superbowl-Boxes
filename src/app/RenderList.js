import { personsHard } from "./logical/randomBox"
import ListItem from './ListItem'
import { useState } from "react";
import InputForm from "./InputForm";
import { Col, Container, Row} from 'reactstrap'



const RenderList = () => {

    const [persons, addPerson] = useState(personsHard)

    return (
      
        <div className="container">
            <div className="row">
                <div className="col-md-10 mt-5">
                    <div className=''>
                        <InputForm />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <div className="list">
                        {persons.map((person, index) => 
                        <ListItem key={index} person={person} />
                        )}
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default RenderList

