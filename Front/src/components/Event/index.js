// == Import : npm
import React from 'react';
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
  Button,
  Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// == Import : local

import './event.scss';

// import PropTypes from 'prop-types';


// == Composant
class Event extends React.Component {
  returnedValue = <h1 className="cpcenter">Aucun évènement à venir</h1>;

  componentWillMount() {
    const { item } = this.props;
    const itemDay = new Date(item.createdAt).getDay();
    const week = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    const day = week[itemDay];

    const itemMonth = new Date(item.createdAt).getMonth();
    const year = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet']
    const month = year[itemMonth];

    const dayNumber = new Date(item.createdAt).getUTCDate();
    const itemYear = new Date(item.createdAt).getFullYear();


    if (item.id !== undefined) {
      this.returnedValue = (
        <article className="event whitebox">
          <Card >
            <CardMedia
              component="img"
              height='250'
              alt="soirée théatre avec les Ah!"    
              image="https://www.theatresparisiensassocies.com/user/img/1/710x0x1207-or.jpg"
              title="soirée théatre"
            />
            <CardContent>  
              <Grid container
                direction="row"
                justify="center"
                alignItems="flex-start">               
                
                <Grid xs={12} sm={12} xl={8} lg={8}>
                  <Typography variant="h2">{item.name}</Typography>
                  <Link to={`/evenement/${item.slug}`} style={{ textDecoration: 'none'}}>
                    <Button variant="contained" color="primary">
                    Voir l'événement
                    </Button>
                  </Link>
                </Grid> 
                
                <Grid xs={3} sm={3} xl={3} lg={3} className="event-calendar">        
                  <div className="newContentDay">{day}</div>
                  <div className="newContentNumber">{dayNumber}</div>
                  <div className="newContentMonth">{month}</div>
                  <div className="newContentYear">{itemYear}</div>                          
                </Grid>
              
              </Grid>              
            </CardContent>
          </Card>      
        </article>
      );
    }
  }

  render() {
    return this.returnedValue;
  }
}

// == Export
export default Event;

// Event.propTypes = {
//   item: PropTypes.array.isRequired,
// };



