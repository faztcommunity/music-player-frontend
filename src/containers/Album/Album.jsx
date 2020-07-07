import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AlbumInfo from '@components/AlbumInfo';
import AlbumSongs from '@components/AlbumSongs';
// Requests
import albumMock from '@Mocks/mock-album';

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
      <AlbumInfo album={album} />
      <section className="album-songs">
        <AlbumSongs songs={album.songs} />
      </section>
    </div>
  );
}
