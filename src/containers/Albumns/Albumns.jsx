import CardSearch from '@components/Cards/CardSearch';
import Section from '@containers/Section';
import Grid from '@material-ui/core/Grid';
// Requests
import albumsMock from '@Mocks/mock-albums';
import genres from '@Mocks/mock-genres';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';

const Albumns = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAlbums(albumsMock);
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className="artists">
      {genres.map((genre) => (
        <Section className="generoAlbumes" title={genre.name}>
          <SimpleBarReact
            direction="rtl"
            autoHide={false}
            scrollbarMaxSize="40"
            scrollbarMinSize="20"
          >
            <Grid container justify="flex-start" alignItems="flex-start" wrap="nowrap">
              {albums
                ?.sort(() => Math.random() - 0.5)
                .map((e, index) => (
                  <Link
                    to={`/albums/${e.id.value}`}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    <CardSearch
                      title={e.title}
                      subTitle={e.artist}
                      image={e.imageUrl}
                      key={e.id}
                    />
                  </Link>
                ))}
            </Grid>
          </SimpleBarReact>
        </Section>
      ))}
    </div>
  );
};

export default Albumns;
