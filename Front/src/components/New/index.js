import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './new.scss';

class New extends React.Component {
  componentWillMount() {
    const { item } = this.props;
    const itemDay = new Date(item.createdAt).getDay();
    const week = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    const day = week[itemDay];

    const itemMonth = new Date(item.createdAt).getMonth();
    const year = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre'];
    const month = year[itemMonth];

    const dayNumber = new Date(item.createdAt).getUTCDate();
    const itemYear = new Date(item.createdAt).getFullYear();

    if (item.id !== undefined) {
      this.returnedValue = (
        <React.Fragment>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            className="news-content"
          >
            <Grid item xs={12} sm={12} xl={12} lg={12} className="newContent">
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="body2" dangerouslySetInnerHTML={{ __html: item.content }} />
              <Typography variant="h4">publié le {dayNumber} {day}{month} {itemYear}</Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    }
  }

  render() {
    return this.returnedValue;
  }
}

// == Export
export default New;
