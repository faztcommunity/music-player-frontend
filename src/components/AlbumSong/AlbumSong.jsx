import React from 'react';
import moment from 'moment';

export default function AlbumSong({ song, index }) {
  return (
    <li className="AlbumSong">
      <div className="AlbumSong-index">{index}</div>
      <div className="AlbumSong-title">{song.title}</div>
      <div className="AlbumSong-length">
        {index === '#'
          ? song.length
          : moment({ minute: 0, seconds: 0 }).add(song.length, 's').format('mm:ss')}
      </div>
    </li>
  );
}
