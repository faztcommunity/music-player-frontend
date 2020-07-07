import React, { useContext } from 'react';
import Button from '@components/Button';
import MusicPlayerContext from '@context/MusicPlayer';

export default function AlbumInfo({ album }) {
  const imageAlt = `${album.title}'s Cover`;
  const { play } = useContext(MusicPlayerContext);

  function playAlbum() {
    play();
  }

  return (
    <div className="AlbumInfo">
      <img className="AlbumInfo-image" src={album.imageUrl} alt={imageAlt} />
      <div className="AlbumInfo-box">
        <h4 className="AlbumInfo-box-heading">Álbum</h4>
        <h1 className="AlbumInfo-box-title">{album.title}</h1>
        <div className="AlbumInfo-box-info2">
          {`${album.artist.name} — ${album.songs.length} canciones — ${album.year}`}
        </div>
        <Button primary className="AlbumInfo-box-button" onClick={playAlbum}>
          Reproducir
        </Button>
      </div>
    </div>
  );
}
