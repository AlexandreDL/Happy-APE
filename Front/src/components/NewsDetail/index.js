// == Import : npm
import React from 'react';
import { Grid, CircularProgress  } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

// == Import : local

import './newsDetails.scss';

// == Composant
class NewsDetail extends React.Component {

  actualNews = null;

  newsLoaded = (
    <div className="cpcenter">
      <CircularProgress />
    </div>
  );

  componentWillMount() {
    const { setHomepageData } = this.props;
    setHomepageData();
  }

  render() {
    const { homepageData, slug, loading } = this.props;


    if (homepageData !== undefined) {
      this.actualNews = homepageData.news.find(actu => actu.slug === slug);
      if (this.actualNews !== null) {
        const itemDay = new Date(this.actualNews.createdAt).getDay();
        const week = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
        const day = week[itemDay];
        const itemMonth = new Date(this.actualNews.createdAt).getMonth();
        const year = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet']
        const month = year[itemMonth];
        const dayNumber = new Date(this.actualNews.createdAt).getUTCDate();
        const itemYear = new Date(this.actualNews.createdAt).getFullYear();


        this.newsLoaded = (
          <React.Fragment>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              className="news-content"
            >
              <Grid item xs={5} sm={5} xl={2} lg={2} className="calendar">

                <div className="newContentDay">{day}</div>
                <div className="newContentNumber">{dayNumber}</div>
                <div className="newContentMonth">{month}</div>
                <div className="newContentYear">{itemYear}</div>
              </Grid>

              <Grid item xs={12} sm={12} xl={8} lg={8}>
                <Typography variant="h2">{this.actualNews.title}</Typography>
                <Typography variant="body2">{this.actualNews.content}</Typography>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      }
    }
    return (!loading) ? this.newsLoaded : this.newsLoaded;
  }
}


NewsDetail.propTypes = {

  slug: PropTypes.string.isRequired,
  setHomepageData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};


// == Export
export default NewsDetail;
