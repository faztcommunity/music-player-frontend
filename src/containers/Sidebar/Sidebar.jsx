import React, { useContext } from 'react';

import { ReactComponent as HomeIcon } from '@icons/home.svg';
import { ReactComponent as PictureIcon } from '@icons/image.svg';
import { ReactComponent as UserIcon } from '@icons/user.svg';
import { ReactComponent as MusicIcon } from '@icons/music.svg';

import MusicPlayerContext from '@context/MusicPlayer';

import Button from '@components/Button';
import SidebarItem from '@components/SidebarItem/SidebarItem';
import SidebarItemList from '@components/SidebarItemList/SidebarItemList';

function Sidebar({ title }) {
  const { toggle: toggleMusicPlayer } = useContext(MusicPlayerContext);

  return (
    <nav className="sidebar">
      {title && <h3 className="sidebar-title">{title}</h3>}
      <SidebarItemList heading="General">
        <SidebarItem exact to="/" icon={HomeIcon}>
          Inicio
        </SidebarItem>
        <SidebarItem to="/albums" icon={PictureIcon}>
          Álbumes
        </SidebarItem>
        <SidebarItem to="/artists" icon={UserIcon}>
          Artistas
        </SidebarItem>
      </SidebarItemList>

      <SidebarItemList heading="Playlist">
        <SidebarItem to="/favourites" icon={MusicIcon}>
          Mis favoritas
        </SidebarItem>
      </SidebarItemList>
      <Button onClick={toggleMusicPlayer}>Toggle Music Player</Button>
    </nav>
  );
}

export default Sidebar;
