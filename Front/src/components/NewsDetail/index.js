// == Import : npm
import React from 'react';
import { Grid, Chip } from '@material-ui/core';

// == Import : local

import './newsDetails.scss';

// == Composant
const NewsDetail = ({ item }) => (
  <React.Fragment>
    <article className="newsDetail">
      <header className="newsHeader">
        <Grid component="header">
          <Grid>
            <h1>{item.title}</h1>
          </Grid>
          <Grid>
            <Chip label={new Date(item.createdAt).toLocaleDateString()} color="primary"/>
          </Grid>
        </Grid>
      </header>
      <p className="newsDetail-content">
        {item.content}
      </p>
    </article>
  </React.Fragment>
);

// == Export
export default NewsDetail;
