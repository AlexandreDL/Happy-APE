import React from 'react';
import Event from 'src/components/Event';
import Slider from 'src/utils/Carousel';
import New from 'src/components/New';
import {
  Container,
  Divider,
  CircularProgress,
  Grid,
  Box, 
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './homepage.scss';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  event = {};

  componentWillMount() {
    const { setHomepageData } = this.props;
    setHomepageData();
  }

  render() {
    const { homepageData, loading } = this.props;

    if (!loading) {
      document.title = homepageData.title;
      if (homepageData.nextEvent !== undefined) {
        this.event = (
          <Event
            item={homepageData.nextEvent}
            key={homepageData.nextEvent.id}
          />
        );
      }
      else {
        this.event = (
          <div className="center event">
            <p>Aucun évènement à afficher</p>
          </div>
        );
      }

      if (homepageData.news !== undefined) {
        this.news = (
          <React.Fragment>        
            <Grid container
              direction="row"
              justify="center"
              alignItems="flex-start"
              >
              {homepageData.news.map(item => (
                <Grid item xs={12} sm={12} xl={6} lg={6} key={item.id}>
                  <Link to={`/actualites/${item.slug}`} style={{ textDecoration: 'none', color: '#000000' }}>
                    <New item={item} key={item.id} />
                  </Link>
                </Grid>
              ))}
            </Grid>              
          </React.Fragment>
        );
      }
      else {
        this.news = (
          <div className="center event">
            <p>Aucune actualité à afficher</p>
          </div>
        );
      }
    }
    else {
      document.title = 'Chargement...';
    }
    return (
      <React.Fragment>
        <Slider />
        <Divider />
        <Box className="whitebox">
          <Container>
            <Typography variant="h1">Évènements à venir</Typography>

            {!loading ? this.event : (
              <div className="cpcenter">
                <CircularProgress disableShrink className="progress" />
              </div>
            )
            }
          </Container>
        </Box>
        
        <Divider />
          <Box className="whitebox">
            <Container>
              <Typography variant="h1">Nos dernières actualités</Typography>
                {!loading ? this.news : (
                  <div className="cpcenter">
                    <CircularProgress disableShrink className="progress" />
                  </div>
                ) }
            </Container>
          </Box>
        <Divider />
      </React.Fragment>
    );
  }
}

export default HomePage;


HomePage.propTypes = {
  homepageData: PropTypes.object.isRequired,
  setHomepageData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
