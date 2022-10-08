import './App.css'
import { Signup } from './components/Signup';
import {Login} from './components/Login'
import { Clockify } from './components/Clockify';
import { Homepage } from './components/Feacherpage';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Clockify/>}></Route>
        <Route path='/login' element={<Login/>}></Route>        
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/features' element={<Homepage/>} ></Route>
        </Routes>
    </div>
  );
  
}

export default App;
