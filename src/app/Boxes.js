import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader } from 'reactstrap'
import BoxesTable from './BoxesTable'
import { useState } from "react";
import PersonCardNM from './PersonCardNM';
import UnfreezeButton from './UnfreezeButton';







const Boxes = (props) => {

  const [personDisp, switchPerson] = useState('')
  const [isLocked, lockHover] = useState(false)

  const hoverPerson = (personID) => {
    if (!isLocked) {
    switchPerson(props.persons[personID])
    }
  }

  const lockPerson = (personIDLock) => {
    switchPerson(props.persons[personIDLock])
    lockHover(true)
  }

  const unLock = () => {
    lockHover(false)
  }


  if (props.isPending){
    return (
        <h1 className="loading">THE PAGE IS LOADING</h1>
    )
  }

  if (props.errorPass){
      return (
          <h1 className="loading">There is an error.</h1>
      )
  }

  if (props.persons) {

    return (
      <>
      <Link to={'/list'}>
      <p>To List Page</p>
      </Link> 
      <div className='containter '>
        <div className='row'>
          <div className='col-md-8'>
            <BoxesTable persons={props.persons} hoverPerson={hoverPerson} lockPerson={lockPerson}/>
          </div>
          <div className='col-md-4'>
            <PersonCardNM person={personDisp} />
            <UnfreezeButton unLock={unLock} isLocked={isLocked} />
          </div>
        </div>
      </div>
      
      </>
    )
  }
}



export default Boxes

