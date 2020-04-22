import React, {useState, useEffect} from "react";
import { useRouteMatch } from 'react-router-dom';

// Components
import Grid from '@material-ui/core/Grid';
import SlideContainer from '../SlideContainer';
import CardSearch from '../Cards/CardSearch';
import CardArtist from '../Cards/CardArtist';
import CardTalent from '../Cards/CardTalent';
import Search from '../Search/Search';

// Requests
import Artist from '../../requests/Artista/Artista';


const ArtistContainer = () => {

    const [artista, setArtista] = useState([]);

    useEffect(() => {
        Artist.get('?results=50').then((res) => {
        setArtista(res);
        })
    }, []);

    let match = useRouteMatch("/artists/:id");

    const t = artista && artista.data && artista.data.results.find(e => e.id.value = match.params.id);

    return (
        <div className="ArtistaContainer">
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                <Search search='' />
                <CardTalent image='https://avatars3.githubusercontent.com/u/15000248?s=460&u=2e1dc6e71e73a162aef210b9807890c30bc48c1f&v=4' />
            </Grid>
            <CardArtist width={150} height={150} title={t && t.name && t.name.first} image={t && t.picture.large} infoTalent="Artista" />
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
}

export default ArtistContainer;