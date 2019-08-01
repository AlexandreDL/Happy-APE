// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Grid } from '@material-ui/core';

// == Import : local

import './events.scss';
import Event from 'src/components/Event';


// == Composant
class Events extends React.Component {

  events = {};

  loading = true;

  componentDidMount() {
    const { getEventsForPage } = this.props;
    getEventsForPage();
  }

  render() {
    const { loading, events } = this.props;
    
    this.events = events;
    this.loading = loading;
    return (
      <Grid container spacing={2}>

        {(!this.loading && this.events.length !== undefined) ? this.events.map(item => (
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <Event item={item} key={item.id} />
          </Grid>
        )) : (
          <div className="cpcenter">
            <CircularProgress disableShrink className="progress" />
          </div>
        )
            }

      </Grid>
    );
  }
}

Events.propTypes = {
  getEventsForPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
};

// == Export
export default Events;
