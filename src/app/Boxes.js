import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
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

  return (
    <>
    <Link to={'/list'}>
    <p>To List Page</p>
    </Link> 
    <div className='containter'>
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



export default Boxes

