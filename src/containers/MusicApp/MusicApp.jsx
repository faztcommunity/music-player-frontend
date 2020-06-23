import React from 'react';
import MusicPlayer from '../MusicPlayer';
import Main from './../Main';
import Sidebar from '../../containers/Sidebar';
import UserNav from '../../components/UserNav/UserNav';

import { Switch } from 'react-router-dom';
import useUser from '../../hooks/useUser';

import { MusicPlayerProvider } from '../../context/MusicPlayer';

export default function MusicApp({ children }) {
  const { isLoggedIn } = useUser();

  return (
    <MusicPlayerProvider>
      {isLoggedIn && <Sidebar />}
      <Main>
        {isLoggedIn && <UserNav />}
        <Switch>{children}</Switch>
      </Main>
      {isLoggedIn && <MusicPlayer />}
    </MusicPlayerProvider>
  );
}
