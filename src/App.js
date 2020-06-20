import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import MusicApp from './containers/MusicApp';
import ArtistContainer from './containers/ArtistContainer';
import Artists from './containers/Artists';
import Album from './containers/Album';

import Message from './components/Message';
import AuthProvider from './context/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MusicApp>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route path="/artists/:id" component={ArtistContainer} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/albums/:id" component={Album} />
          <Route>
            <Message height={400} children="NO ENCONTRADO" status="404" />
          </Route>
        </MusicApp>
      </Router>
    </AuthProvider>
  );
}

export default App;
