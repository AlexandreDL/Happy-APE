// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

import './who.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';

// == Composant
class WhoAreWe extends React.Component {
  componentWillMount() {
    const { setWhoAreWeData } = this.props;
    setWhoAreWeData();
  }

  render() {
    const { whoAreWeData } = this.props;
    if (whoAreWeData === undefined) {
      return <LinearProgress />;
    }
    else {
      return (
        <article className="who whitebox">
            <div key={whoAreWeData.id}>
              <Typography variant="h1">{whoAreWeData.title}</Typography>
              <Typography variant="body1"><ReactMarkdown source={whoAreWeData.content} /></Typography>
            </div>
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
                <Typography variant="h3">Maria</Typography>
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
                <Typography variant="h3">Thomas</Typography>
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
                <Typography variant="h3">Alex</Typography>
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
                <Typography variant="h3">fabrice</Typography>
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
                <Typography variant="h3">inconnu</Typography>
                <p className="who-role">on sait pas trop</p> 
              </CardContent>
            </Card>
          
          </section>
        </article>

      )
    }
  }
}

// == Export
export default WhoAreWe;

WhoAreWe.propTypes = {
  setWhoAreWeData: PropTypes.func.isRequired,
};
