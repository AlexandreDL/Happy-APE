// == Import : npm
import React from 'react';
import { LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

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

      if (this.actualEvent !== null) {
        this.eventLoaded = (
          <article className="eventDetail whitebox">
            <Typography variant="h2">{this.actualEvent.name}</Typography>
            <Typography variant="body2">{this.actualEvent.content}</Typography>
            <Card >
              <CardMedia
                src={this.actualEvent.media[0].url}
                title="Paella dish"
              />
            </Card>
          </article>
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
