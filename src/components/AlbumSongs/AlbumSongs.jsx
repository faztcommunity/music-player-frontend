import React from 'react';
import AlbumSong from '@components/AlbumSong';

export default function AlbumSongs({ songs }) {
  return (
    <ul className="AlbumSongs-box">
      <li className="AlbumSong AlbumSong-heading">
        <div className="AlbumSong-index">#</div>
        <div className="AlbumSong-title">Titulo</div>
        <div className="AlbumSong-length">Duración</div>
      </li>
      {songs.map((song, index) => (
        <AlbumSong key={song.id} index={index + 1} song={song} />
      ))}
    </ul>
  );
}
