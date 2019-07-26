import React from 'react';
import Event from 'src/components/Event';
import Slider from 'src/utils/Carousel';
import NewsDetail from 'src/components/NewsDetail';
import { Container, Divider } from '@material-ui/core';


const HomePage = () => (
  <React.Fragment>
    <Slider />
    <Divider />
    <article id="events">
      <Container>
        <Event />
      </Container>
    </article>
    <Divider />
    <NewsDetail />
    <NewsDetail />
    <NewsDetail />
    <NewsDetail />
    <Divider />
  </React.Fragment>
);

export default HomePage;
