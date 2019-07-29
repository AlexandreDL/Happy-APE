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
    return (
      <React.Fragment>
        <Slider />
        <Divider />
        <h1>Évènements à venir</h1>
        <Container>
          {!loading ? this.event : (
            <div className="cpcenter">
              <CircularProgress disableShrink className="progress" />
            </div>
          )
          }
        </Container>
        <Divider />
        <h1>Nos dernières actualités</h1>
        {!loading ? this.news : (
          <div className="cpcenter">
            <CircularProgress disableShrink className="progress" />
          </div>
        ) }
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
