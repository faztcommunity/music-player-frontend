import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';

import CardLandscape from '@components/Cards/CardLandscape';
import CardSearch from '@components/Cards/CardSearch';
import CardTalent from '@components/Cards/CardTalent';
import Section from '@containers/Section';

// Requests
import Artist from '@requests/Artista/Artista';
import albumsMock from '@Mocks/mock-albums';

function Home() {
  const [artista, setArtista] = useState([]);
  const { id } = useParams();
  const [albums, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Artist.get('?results=7').then((res) => {
      setArtista(res);
    });
  }, [id]);

  useEffect(() => {
    setAlbum(albumsMock);
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className="home">
      <Section title={`Mis favoritos (${artista?.data?.results?.length || 0})`}>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <CardLandscape
            novo
            data=""
            width={250}
            image={
              'http://clarovideocdn1.clarovideo.net/pregeneracion//cms/images/202002/75549_Default_Legion-Now_03181244.jpg?size&imwidth=290'
            }
          />
        </Grid>
      </Section>
      <br></br>
      <Section title="Álbumes más recientes">
        <SimpleBarReact
          direction="rtl"
          autoHide={false}
          scrollbarMaxSize="40"
          scrollbarMinSize="20"
        >
          <Grid className="albumsRecents">
            {albums.map((items) => {
              return (
                <CardSearch
                  title={items.title}
                  subTitle={items.artist}
                  image={items.imageUrl}
                  key={items.id}
                />
              );
            })}
          </Grid>
        </SimpleBarReact>
      </Section>
      <br></br>
      <Section title="Sencillos más recientes">
        <SimpleBarReact
          direction="rtl"
          autoHide={false}
          scrollbarMaxSize="40"
          scrollbarMinSize="20"
        >
          <Grid className="albumsRecents">
            <CardSearch title="Mutter" subTitle="Rammstein" />
            <CardSearch title="Mutter" subTitle="Rammstein" />
            <CardSearch title="Mutter" subTitle="Rammstein" />
            <CardSearch title="Mutter" subTitle="Rammstein" />
            <CardSearch title="Mutter" subTitle="Rammstein" />
            <CardSearch title="Mutter" subTitle="Rammstein" />
            <CardSearch title="Mutter" subTitle="Rammstein" />
            <CardSearch title="Mutter" subTitle="Rammstein" />
          </Grid>
        </SimpleBarReact>
      </Section>
      <br></br>
      <Section title="Artistas destacados">
        <SimpleBarReact
          direction="rtl"
          autoHide={false}
          scrollbarMaxSize="40"
          scrollbarMinSize="20"
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            wrap="nowrap"
          >
            {artista?.data?.results?.map((e, index) => (
              <Link
                to={`/artists/${e.id.value}`}
                key={index}
                style={{ textDecoration: 'none' }}
              >
                <CardTalent
                  width={150}
                  height={150}
                  //title={e.name.first}
                  image={e.picture.large}
                  //infoTalent="Artista"
                />
              </Link>
            ))}
          </Grid>
        </SimpleBarReact>
      </Section>
    </div>
  );
}

export default Home;
