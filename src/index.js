import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import Button from './components/Button';
import Player from "./components/Player";

function App() {
  // This is just an example
  return (
  <React.Fragment>
      <Button onclick={()=>alert('kepedo')} text='Button component'/>
      <Router>
          <Route exact path="/player" component={Player} />       
      </Router>      
  </React.Fragment>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
