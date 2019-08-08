// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress, Grid } from '@material-ui/core';

// == Import : local

import './events.scss';
import Event from 'src/components/Event';


// == Composant
class Events extends React.Component {
  events = null;

  wait = null;

  componentDidMount() {
    const { getEventsForPage } = this.props;
    getEventsForPage();
  }

  render() {
    const { loading, events } = this.props;

    const eventsLoaded = events['hydra:member'];

    if (!loading && eventsLoaded !== undefined) {
      if (eventsLoaded.length !== 0) {
        this.events = (
          <Grid container spacing={2} className="whitebox">
            {eventsLoaded.map(item => (
              <Grid item xs={12} sm={12} xl={6} lg={6} key={item.slug}>
                <Event item={item} />
              </Grid>
            ))}
          </Grid>
        );
      }
      else {
        this.events = <p>Aucun évènement à afficher</p>;
      }
    }
    else {
      this.wait = (
        <div className="cpcenter">
          <LinearProgress color="secondary" />
        </div>
      );
    }

    return (!loading) ? this.events : this.wait;
  }
}

Events.propTypes = {
  getEventsForPage: PropTypes.func.isRequired,
  // events: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  // events: PropTypes.array.isRequired,
};

// == Export
export default Events;
