// == Import : npm
import React from 'react';

// == Import : local

import './who.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';




// == Composant
const WhoAreWe = () => (
  <article className="who">
    <h1>Qui sommes nous ?</h1>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates error fuga ex. Deserunt quibusdam doloribus, laboriosam recusandae itaque earum doloremque consequuntur. Harum, consequuntur! Modi, voluptas asperiores repellendus hic nam porro eius exercitationem molestiae delectus corporis corrupti nostrum expedita doloremque odit assumenda, suscipit dolores nemo. Odio deserunt harum sapiente eligendi accusamus, eaque voluptates doloribus sint. Repellendus in labore est voluptates quae, ratione dolore ea illo ad voluptate obcaecati, distinctio mollitia exercitationem at necessitatibus minima fugit unde maxime, amet veniam sapiente alias.
    </p>
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

// == Export
export default WhoAreWe;
