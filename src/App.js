import logo from './logo.svg';
import 'bootswatch/dist/morph/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import  Home  from '../src/Components/Home';
import Footer from "../src/Components/Footer";
import Header from './Components/Header';

import Hotels from './Components/Hotels';
import FlightSearch from './Components/FlightSearch';

function App() {
  return (
    <div className="App">
      <Header/>
     <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/flights' element={<FlightSearch/>}/>
        <Route path='/hotels' element = {<Hotels/>}/>
      </Routes>
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
