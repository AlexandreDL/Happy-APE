import React from 'react';
import Event from 'src/components/Event';
import Slider from 'src/utils/Carousel';
import NewsDetail from 'src/components/NewsDetail';
import { Container, Divider, ListItemAvatar } from '@material-ui/core';
import axios from 'axios';


class HomePage extends React.Component {

  homepageData = 'null';

  componentDidMount() {
    if(this.props.homepageData === null) {
      this.props.setHomepageData();
      console.log(this.props.homepageData);
    }
  }

  componentDidUpdate() {
    if(this.props.homepageData === null) {
      this.props.setHomepageData();
      console.log(this.props.homepageData);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Slider />
        <Divider />
        <article id="events">
          <Container>
            <Event />
          </Container>
        </article>
        <Divider />
        {/* {this.homepageData.news.map(item => (
          <NewsDetail item={item} />
          ))} */}
        <Divider />
      </React.Fragment>
    );
  };
};

export default HomePage;
