import React from 'react';
import Event from 'src/components/Event';
import Slider from 'src/utils/Carousel';
import NewsDetail from 'src/components/NewsDetail';


const HomePage = () => (
  <React.Fragment>

    <Event />
    <NewsDetail />
    <NewsDetail />
    <NewsDetail />
    <NewsDetail />
  </React.Fragment>
);

export default HomePage;
