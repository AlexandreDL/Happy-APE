import React from 'react';
import Event from 'src/components/Event';
import Slider from 'src/utils/Carousel';
import New from 'src/components/New';
import {
  Container,
  Divider,
  LinearProgress,
  Grid,
  Box,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
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

    if (!loading && homepageData !== undefined) {
      document.title = homepageData.title;
      if (homepageData.nextEvent !== undefined) {
        this.event = homepageData.nextEvent.map(item => (
          <Event
            item={item}
            key={homepageData.nextEvent.id}
          />
        ));
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
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {homepageData.news.map(item => (
                <Grid item xs={12} sm={12} xl={12} lg={12} key={item.slug}>
                  <Link to={`/actualites/${item.slug}`} style={{ textDecoration: 'none', color: '#000000' }}>
                    <New item={item} key={item.id} />
                  </Link>
                  <Divider />
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
        <Grid
          container
          className="whitebox"
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          >        
          <Grid item xs={12} sm={12} xl={12} lg={12}>   
            <Typography variant="h1">Évènements à venir</Typography>
            {!loading ? this.event : (
              <div className="cpcenter">
                <LinearProgress color="secondary" />
              </div>
            )
            }
          </Grid>
          <Divider />    
          <Grid item xs={12} sm={12} xl={12} lg={12}>      
            <Typography variant="h1">Nos dernières actualités</Typography>
            {!loading ? this.news : (
              <div className="cpcenter">
                <LinearProgress color="secondary" />
              </div>
            ) }
          </Grid>
          <Divider />
        </Grid>
      </React.Fragment>
    );
  }
}

export default HomePage;


HomePage.propTypes = {
  setHomepageData: PropTypes.func.isRequired,
  homepageData: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
