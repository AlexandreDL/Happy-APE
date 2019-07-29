// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

import './who.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// == Composant
class WhoAreWe extends React.Component {
  
  componentWillMount() {
    const { setWhoAreWeData } = this.props;
    setWhoAreWeData();
  }

  render () {
    const { whoAreWeData } = this.props;

    return (
      <article className="who">
        {whoAreWeData.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))
            }
        <section className="who-trombi">
          <Card className="member-card">
            <CardMedia
              component="img"
              alt="maria"
              height="140"
              image="https://previews.123rf.com/images/kritchanut/kritchanut1405/kritchanut140500053/28162597-homme-ic%C3%B4ne-silhouette-portrait.jpg"
              title="Maria"
            />
            <CardContent>
              <h2>Maria</h2>
              <p className="who-role">présidente de l'association</p> 
            </CardContent>
            
          </Card>
          <Card className="member-card">
            <CardMedia
              component="img"
              alt="maria"
              height="140"
              image="https://previews.123rf.com/images/kritchanut/kritchanut1405/kritchanut140500053/28162597-homme-ic%C3%B4ne-silhouette-portrait.jpg"
              title="Maria"
            />
            <CardContent>
              <h2>Thomas</h2>
              <p className="who-role">animateur en chef</p> 
            </CardContent>
          </Card>
        
          <Card className="member-card">
            <CardMedia
              component="img"
              alt="maria"
              height="140"
              image="https://previews.123rf.com/images/kritchanut/kritchanut1405/kritchanut140500053/28162597-homme-ic%C3%B4ne-silhouette-portrait.jpg"
              title="Maria"
            />
            <CardContent>
              <h2>Alex</h2>
              <p className="who-role">responsable café</p> 
            </CardContent>
          </Card>
        
          <Card className="member-card">
            <CardMedia
              component="img"
              alt="maria"
              height="140"
              image="https://previews.123rf.com/images/kritchanut/kritchanut1405/kritchanut140500053/28162597-homme-ic%C3%B4ne-silhouette-portrait.jpg"
              title="Maria"
            />
            <CardContent>
              <h2>fabrice</h2>
              <p className="who-role">responsable tirelire</p> 
            </CardContent>
          </Card>
          <Card className="member-card">
            <CardMedia
              component="img"
              alt="maria"
              height="140"
              image="https://previews.123rf.com/images/kritchanut/kritchanut1405/kritchanut140500053/28162597-homme-ic%C3%B4ne-silhouette-portrait.jpg"
              title="Maria"
            />
            <CardContent>
              <h2>inconnu</h2>
              <p className="who-role">on sait pas trop</p> 
            </CardContent>
          </Card>
        
        </section>
      </article>

    );
  }
}

// == Export
export default WhoAreWe;

WhoAreWe.propTypes = {
  whoAreWeData: PropTypes.array.isRequired,
  setWhoAreWeData: PropTypes.func.isRequired,
};
