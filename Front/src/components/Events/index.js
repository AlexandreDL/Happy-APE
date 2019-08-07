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

    if (!loading || events.length !== 0) {
      this.events = (
        <Grid container spacing={2} >
          {events.map(item => (
            <Grid item xs={12} sm={12} xl={6} lg={6} key={item.slug}>
              <Event item={item} />
            </Grid>
          ))}
        </Grid>
      );
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
