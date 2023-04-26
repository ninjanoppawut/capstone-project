import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';


// import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;

