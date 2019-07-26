// == Import : npm
import React from 'react';

// == Import : local

import './event.scss';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


// == Composant
const Event = () => { 
  return (
    <article className="event">
      <Card >
        <CardMedia
          component="img"
          alt="soirée théatre avec les Ah!"
          height="140"
          image="https://www.theatresparisiensassocies.com/user/img/1/710x0x1207-or.jpg"
          title="soirée théatre"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Soirée théâtre - troupe des AH !
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor voluptatum quia unde doloribus pariatur aliquid quasi iste non, soluta eos voluptas modi est maxime optio sunt repellat eius cumque.
          </Typography>
        </CardContent>
      
        <CardActions className='event-cardAction'>
          <Button className="event-button" variant="contained" color="primary">
          voir l'événement
          </Button>
        </CardActions>
      </Card>    
    </article>
);
} 

// == Export
export default Event;
