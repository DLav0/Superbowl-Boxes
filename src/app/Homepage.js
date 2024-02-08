import { Link } from 'react-router-dom'
import RenderList from './RenderList'

const Homepage = () => {
    return (
        <div className='App-header'>
            <header>
                <h1 className="site-header">Superbowl Boxes Pool </h1>
            </header> 
            <Link to={'/list'}>
                <h1>Lets Get Started</h1>
            </Link>
        </div>
    )
}

export default Homepage