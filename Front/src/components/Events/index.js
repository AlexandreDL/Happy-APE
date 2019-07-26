// == Import : npm
import React from 'react';

// == Import : local

import './events.scss';
import Event from 'src/components/Event';


// == Composant
const Events = () => (
  <article className="event-list">
    <Event />
    <Event />
    <Event />
  </article>
);

// == Export
export default Events;
