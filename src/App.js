import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation'
import Gallery from './Gallery'
import Shop from './Shop'
import Store from './Store'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { render } from 'react-dom';
import {Container} from 'semantic-ui-react'

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, NavbarBrand } from 'react-bootstrap';
function App() {
  return (
    <div id="app">
    
      <h1>Literary Heaven</h1>
      <Router>
      <Navigation/>
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/store' element ={<Store/>}/>
      <Route path='/gallery' element ={<Gallery/>}/>
      </Routes>
      </Router>
    
    <br/>
    <br/>
    <br/>
    <footer>
    <a target="_blank" href="https://icons8.com/icon/39777/right-arrow">Right Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    <a target="_blank" href="https://icons8.com/icon/99996/left-arrow">Left Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </footer>
    </div>
    );
}

export default App;
/*
<Router>
    <Route path='/about' element={<About/>}></Route>
    
    </Router>

      <Route path="/about" element={<About/>}/>
*/

/*
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 */

  /*
  <Route path='/' element={<Home/>}></Route>
   */

  /*
  <div>
    
      <h1>Literary Heaven</h1>
     
      <Navigation/>
      <Router>
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/shop' element ={<Shop/>}/>
      <Route path='/gallery' element ={<Gallery/>}/>
      </Routes>
      </Router>
    


    </div>
  */
 /* Dev's code
  <Navbar bg="dark" variant="dark">
      <Container> 
    <Nav className="me-auto">
    <Nav.Link a href="/about">About</Nav.Link>
      <Nav.Link a href="/about">About</Nav.Link>
      <Nav.Link href="/adminhome/teacher/view">Instructors</Nav.Link>
      <Nav.Link href="/adminhome/evaluations/send">Evaluations</Nav.Link>
    </Nav>
    </Container>
  </Navbar>*/
 