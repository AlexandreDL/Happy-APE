// == Import : npm
import React from 'react';
import { LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

// == Import : local

import './eventDetail.scss';


// == Composant
class EventDetail extends React.Component {
  actualEvent = null;

  eventLoaded = (
    <div className="cpcenter">
      <LinearProgress color="secondary" />
    </div>
  );

  componentWillMount() {
    const { getEventsForPage } = this.props;
    getEventsForPage();
  }

  render() {
    const { events, slug, loading } = this.props;

    if (events !== undefined && events['hydra:member'].length !== 0) {
      this.actualEvent = events['hydra:member'].find(item => item.slug === slug);
      const EventImage = this.actualEvent.media[0].url;

      const itemDay = new Date(this.actualEvent.date).getDay();
      const week = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
      const day = week[itemDay];

      const itemMonth = new Date(this.actualEvent.date).getMonth();
      const year = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      const month = year[itemMonth];

      const dayNumber = new Date(this.actualEvent.date).getUTCDate();
      const itemYear = new Date(this.actualEvent.date).getFullYear();



      if (this.actualEvent !== null) {
        this.eventLoaded = (
          <Grid          
            container
            className="whitebox"
            direction="row"
            justify="center"
            alignItem="center"
            spacing={2}
          >          
            <Grid item xs={12} sm={6} xl={4} lg={4}>
              <CardMedia
                component="img"
                alt="event-image"
                justify="center"
                image={`${EventImage}`}
                title={`${this.actualEvent.title}`}
              />           
            </Grid>
            <Grid item xs={12} sm={6} xl={6} lg={6}>
              <Typography variant="h2">{this.actualEvent.title}</Typography>
              <Typography variant="body2">{this.actualEvent.content}</Typography>
              <div className="event-calendar">
              <div className="newContentDay">{day}</div>
              <div className="newContentNumber">{dayNumber}</div>
              <div className="newContentMonth">{month}</div>
              <div className="newContentYear">{itemYear}</div>
            </div>
            </Grid> 
            
          </Grid>
        );
      }
      else {
        this.eventLoaded = <LinearProgress />;
      }
    }


    return (!loading) ? this.eventLoaded : this.eventLoaded;
  }
}

EventDetail.propTypes = {
  getEventsForPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  events: PropTypes.object,
  slug: PropTypes.string.isRequired,
};
// == Export
export default EventDetail;
