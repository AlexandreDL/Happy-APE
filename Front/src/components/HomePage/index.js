import React from 'react';
import Event from 'src/components/Event';
import Slider from 'src/utils/Carousel';
import NewsDetail from 'src/components/NewsDetail';
import { Container, Divider, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import './homepage.scss';

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
<<<<<<< HEAD
      if (homepageData.nextEvent !== undefined) {
=======
      if (homepageData.nextEvent !== null) {
>>>>>>> 6d2d6ae2749b6e16dbca8d6b2c638e08f978ac90
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
<<<<<<< HEAD
      if (homepageData.news !== undefined) {
=======
      if (homepageData.news !== null && homepageData.news.length !== 0) {
>>>>>>> 6d2d6ae2749b6e16dbca8d6b2c638e08f978ac90
        this.news = (
          homepageData.news.map(item => (
            <NewsDetail item={item} key={item.id} />
          ))
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

<<<<<<< HEAD
=======
    console.log(homepageData.news);

>>>>>>> 6d2d6ae2749b6e16dbca8d6b2c638e08f978ac90
    return (
      <React.Fragment>
        <Slider />
        <Divider />
        <h1>Évènements à venir</h1>
        <Container>
<<<<<<< HEAD
          {!loading ? this.event : (
            <div className="cpcenter">
              <CircularProgress disableShrink className="progress" />
            </div>
          )
=======
          {!loading ? this.event : <CircularProgress disableShrink className="progress" />
>>>>>>> 6d2d6ae2749b6e16dbca8d6b2c638e08f978ac90
          }
        </Container>
        <Divider />
        <h1>Nos dernières actualités</h1>
<<<<<<< HEAD
        {!loading ? this.news : (
          <div className="cpcenter">
            <CircularProgress disableShrink className="progress" />
          </div>
        ) }
=======
        {!loading ? this.news : <CircularProgress disableShrink className="progress" /> }
>>>>>>> 6d2d6ae2749b6e16dbca8d6b2c638e08f978ac90
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
