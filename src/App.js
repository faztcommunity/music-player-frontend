import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Button from './components/Button';
import Home from './components/Home';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import Page from './components/Page';
import Login from './components/Login';
import MainRoute from './components/MainRoute';
import ArtistContainer from './components/ArtistContainer';
import Message from './components/Message';

function App() {
  const [musicPlayerActive, setMusicPlayerActive] = useState(false);
  const [musicPlayerPlaying, setMusicPlayerPlaying] = useState(false);
  const musicPlayerState = {
    active: musicPlayerActive,
    setActive: setMusicPlayerActive,
    playing: musicPlayerPlaying,
    setPlaying: setMusicPlayerPlaying
  };
  return (
    <Router>
      <Sidebar musicPlayerState={musicPlayerState}></Sidebar>
      <Main>
        <Switch>
          <Route exact path="/login" component={Login} />
          <MainRoute exact path="/" component={Home} />
          <MainRoute path="/albums" component={Home} />
          <MainRoute exact path="/artists" component={Home} />
          <MainRoute path="/artists/:id" component={ArtistContainer} />
          <MainRoute path="/favourites" component={Home} />
          <Route>
            <Message height={400} children="NO ENCONTRADO" status="404" />
          </Route>
        </Switch>
      </Main>
      <MusicPlayer musicPlayerState={musicPlayerState} />
    </Router>
  );
}

export default App;
