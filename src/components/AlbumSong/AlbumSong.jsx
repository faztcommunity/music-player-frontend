import React from 'react';
import moment from 'moment';

export default function AlbumSong({ song, index }) {
  return (
    <li className={'album-song'}>
      <div className="album-song-index">{index}</div>
      <div className="album-song-title">{song.title}</div>
      <div className="album-song-length">
        {index === '#'
          ? song.length
          : moment({ minute: 0, seconds: 0 }).add(song.length, 's').format('mm:ss')}
      </div>
    </li>
  );
}
