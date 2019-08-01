// == Import : npm
import React from 'react';
import { Grid, Chip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// == Import : local

import './newsDetails.scss';

// == Composant
const NewsDetail = ({ item }) =>{

  const itemDay = new Date(item.createdAt).getDay();
  const week = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  const day = week[itemDay];

  const itemMonth = new Date(item.createdAt).getMonth();
  const year = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet']
  const month = year[itemMonth];

  const dayNumber = new Date(item.createdAt).getUTCDate();
  const itemYear = new Date(item.createdAt).getFullYear();

  return (
    <React.Fragment>  
      <article className="newsContent ">
        <Grid className="calendar">
          <div className="newContentDay">{day}</div>
          <div className="newContentNumber">{dayNumber}</div>
          <div className="newContentMonth">{month}</div>
          <div className="newContentYear">{itemYear}</div>           
        </Grid>        
        <Grid component="newsHeader">         
            <Typography variant="h2">{item.title}</Typography>
            <Typography variant="body2">{item.content}</Typography>
        </Grid>
      </article>
    </React.Fragment>
  );
};

// == Export
export default NewsDetail;



