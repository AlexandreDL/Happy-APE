/* eslint-disable react/destructuring-assignment */

import React from 'react';
import Event from 'src/components/Event';
import Slider from 'src/utils/Carousel';
import NewsDetail from 'src/components/NewsDetail';
import { Container, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';


class HomePage extends React.Component {
  homepageData = null;

  componentWillMount() {
    this.props.setHomepageData();
  }

  render() {
    if (this.props.homepageData !== null) {
      document.title = this.props.homepageData.title;
    }
    return (
      <React.Fragment>
        <Slider />
        <Divider />
        <h1>Évènements à venir</h1>
        <Container>
          {(this.props.homepageData !== null) && (
            <Event
              item={this.props.homepageData.nextEvent}
              key={this.props.homepageData.nextEvent.id}
            />
          )}
        </Container>
        <Divider />
        <h1>Nos dernières actualités</h1>
        {(this.props.homepageData !== null) && this.props.homepageData.news.map(item => (
          <NewsDetail item={item} key={item.id} />
        ))}
        <Divider />
      </React.Fragment>
    );
  }
}

export default HomePage;


// HomePage.propTypes = {
//   homepageData: PropTypes.array.isRequired,
//   setHomepageData: PropTypes.func.isRequired,
// };
