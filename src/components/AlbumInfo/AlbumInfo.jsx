import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@components/Button';
import MusicPlayerContext from '@context/MusicPlayer';
//import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
  albumImg: {
    height: '25rem'
  },
  infoBox: {
    margin: '3rem',
    "& > *": {
      marginBottom: '1rem'
    }
  },
  albumHeading: {
    fontWeight: theme.palette.heading.fontWeight,
    color: theme.palette.heading.color,
    textTransform: theme.palette.heading.uppercase
  }
}))

export default function AlbumInfo({ album }) {
  const classes = useStyles();
  const imageAlt = `${album.title}'s Cover`;
  const { play } = useContext(MusicPlayerContext);

  function playAlbum() {
    play();
  }

  return (
    <>
      <img className={classes.albumImg} src={album.imageUrl} alt={imageAlt} />
      <div className={classes.infoBox}>
        <h4 className={classes.albumHeading}>Álbum</h4>
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
