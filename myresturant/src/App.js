import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Starwars from './component/Starwars/Starwars';

const Moses =()=>{
  return(
    <div>
      <h4>Say no to those who talk behind you</h4>
    </div>
  )
}
const App =()=>{
  return(
    <div>
      <Navbar  name="Moses" />
      <Navbar name="Gabriel" />
      <Navbar name="Elijah" />
      <Navbar name="Blessing" />
      <Starwars/>
      <Moses/>
      
    </div>
  )
}

export default App;
