import { Routes, Route } from 'react-router-dom';
import RenderList from './app/RenderList'
import ReduxInit from './app/ReduxInit'
import './App.css';
import Homepage from './app/Homepage';

function App() {
  return (
    <div className='App-header'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/list' element={<RenderList />} />
      </Routes> 
    </div>
  );
}

export default App;

<Routes>
<Route path='/' element={<Homepage />} />
<Route path='/list' element={<RenderList />} />
</Routes> 