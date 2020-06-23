import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AlbumSongs from '../../components/AlbumSongs';
import AlbumInfo from '../../components/AlbumInfo';

// Requests
import albumMock from '../../Mocks/mock-album';

export default function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch album...
    setAlbum(albumMock);
    setLoading(false);
  }, [id]);

  if (loading) return null;

  return (
    <div className="album">
      <section className="album-info">
        <AlbumInfo album={album} />
      </section>
      <section className="album-songs">
        <AlbumSongs songs={album.songs} />
      </section>
    </div>
  );
}
