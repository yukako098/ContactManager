import React, {
  Component
} from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Header branding = "Contact Manger"/>
        <div className="container">
          <Contact name="John Done" email="john@gmail.com" phone="555-555-5555"/>
          <Contact name="Karen Smith" email="karen@gmail.com" phone="666-666-6666"/>
        </div>
        
      </div>
    );
  }
}

export default App;