import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import BoxesTable from './BoxesTable'



const blankArrRow = ['', '', '5', '', '', '', '', '', '', '']



const Boxes = (props) => {

  return (
    <>
    <Link to={'/list'}>
    <p>To List Page</p>
    </Link> 
    <BoxesTable persons={props.persons}/>
    </>
  )
  

}



export default Boxes

