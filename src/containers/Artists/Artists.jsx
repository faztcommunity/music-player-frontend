import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardTalent from '@components/Cards/CardTalent';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import useUser from '@hooks/useUser';
import Section from '@containers/Section';

// Requests
import Artist from '@requests/Artista/Artista';
import genres from '@Mocks/mock-genres';

const Artists = () => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    Artist.get('?results=20').then((res) => {
      setArtistas(res);
    });
  }, []);

  return (
    <div className="artists">
      {genres.map((genre) => (
        <Section key={genre.id} className="generoArtistas" title={genre.name}>
          <SimpleBarReact
            direction="rtl"
            autoHide={false}
            scrollbarMaxSize="40"
            scrollbarMinSize="20"
          >
            <Grid container justify="flex-start" alignItems="flex-start" wrap="nowrap">
              {artistas?.data?.results
                ?.sort(() => Math.random() - 0.5)
                .map((e, index) => (
                  <Link
                    to={`/artists/${e.id.value}`}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    <CardTalent
                      width={200}
                      height={200}
                      title={e.name.first}
                      image={e.picture.large}
                      // infoTalent={`# ${index + 1}`}
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

export default Artists;
