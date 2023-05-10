import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';


// import Header from './components/Header';
import Nav from './components/Nav';
// import Main from './components/Main';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Reservation from './components/pages/Reservation';

import Onlineorder from './components/pages/Onlineorder';
import Login from './components/pages/Login';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Router>
      <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/reservation' element={<Reservation/>}></Route>
            <Route path='/onlineorder' element={<Onlineorder/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;

