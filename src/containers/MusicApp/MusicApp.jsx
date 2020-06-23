import React from 'react';
import MusicPlayer from '@containers/MusicPlayer';
import Main from '@containers/Main';
import Sidebar from '@containers/Sidebar';
import UserNav from '@components/UserNav/UserNav';

import { Switch } from 'react-router-dom';
import useUser from '@hooks/useUser';

<<<<<<< HEAD
import { MusicPlayerProvider } from '@context/MusicPlayer';
=======
import { MusicPlayerProvider } from '../../context/MusicPlayer';
>>>>>>> f9360064a7dbdd4f14d67ed7ce384bf7070c6c31

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
