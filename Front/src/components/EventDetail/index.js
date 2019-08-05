// == Import : npm
import React from 'react';
import { LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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
    const { getEventsForPage} = this.props;
    getEventsForPage();
  }

  render() {

    const { events, slug, loading } = this.props;
    

    if (events[0] !== undefined) {
      this.actualEvent = events.find(item => item.slug === slug);

      if (this.actualEvent !== null) {
        this.eventLoaded = (
          <article className="eventDetail whitebox">
            <Typography variant="h2">{this.actualEvent.name}</Typography>
            <Typography variant="body2">{this.actualEvent.content}</Typography>
          </article>
        );
      }
    }


    return (!loading) ? this.eventLoaded : this.eventLoaded;
  }
}

EventDetail.propTypes = {
  getEventsForPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  events: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};
// == Export
export default EventDetail;
