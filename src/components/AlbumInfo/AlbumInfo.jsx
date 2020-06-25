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
    <>
      <img className="album-img" src={album.imageUrl} alt={imageAlt} />
      <div className="album-info-box">
        <h4 className="album-heading">Álbum</h4>
        <h1 className="album-title">{album.title}</h1>
        <div className="album-info2">
          <p>{album.artist.name}</p>
          <p>{album.songs.length} canciones</p>
          <p>{album.year}</p>
        </div>
        <Button primary className="album-button" onClick={playAlbum}>
          Reproducir
        </Button>
      </div>
    </>
  );
}
