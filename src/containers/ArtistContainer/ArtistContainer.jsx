import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

// Components
import SlideContainer from '../SlideContainer';
import CardSearch from '../../components/Cards/CardSearch';
import CardArtist from '../../components/Cards/CardArtist';

// Requests
import Artist from '../../requests/Artista/Artista';

const ArtistContainer = (history) => {
  const [artista, setArtista] = useState([]);

  useEffect(() => {
    Artist.get('?results=50').then((res) => {
      setArtista(res);
    });
  }, []);

  let match = useRouteMatch('/artists/:id');

  const t = artista?.data?.results?.find((e) => (e.id.value = match.params.id));

  return (
    <div className="ArtistaContainer">
      <CardArtist
        width={150}
        height={150}
        title={t?.name?.first}
        image={t?.picture?.large}
        infoTalent="Artista"
      />
      <h1 className="titulo_home">Álbumes</h1>
      <SlideContainer slidesToShow={4.2} dots>
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
      </SlideContainer>

      <h1 className="titulo_home">Sencillos</h1>
      <SlideContainer slidesToShow={4.2} dots>
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
      </SlideContainer>
    </div>
  );
};

export default ArtistContainer;
