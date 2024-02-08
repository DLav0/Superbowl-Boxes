import { personsHard } from "./logical/randomBox"
import ListItem from './ListItem'

const RenderList = () => {
    return (
        <div className=''>
           {personsHard.map((person, index) => 
                <ListItem key={index} person={person} />
           )}
        </div>
    )
}

export default RenderList

