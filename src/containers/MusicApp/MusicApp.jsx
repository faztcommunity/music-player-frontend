import UserNav from '@components/UserNav/UserNav';
import Main from '@containers/Main';
import MusicPlayer from '@containers/MusicPlayer';
import Sidebar from '@containers/Sidebar';
import { MusicPlayerProvider } from '@context/MusicPlayer';
import useUser from '@hooks/useUser';
import React from 'react';
import { Switch } from 'react-router-dom';

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
