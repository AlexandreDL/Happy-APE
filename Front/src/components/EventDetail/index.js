// == Import : npm
import React from 'react';
import { CircularProgress } from '@material-ui/core';

// == Import : local

import './eventDetail.scss';


// == Composant
class EventDetail extends React.Component {

  actualEvent = null;
  
  eventLoaded = (
    <div className="cpcenter">
      <CircularProgress />
    </div>
  );

  componentWillMount() {
    const { getEventsForPage } = this.props;
    getEventsForPage();
  }

  render() {

    const { events, slug, loading } = this.props;

    if (events[0] !== undefined) {
      this.actualEvent = events.find(item => { return item.slug === slug });

      if (this.actualEvent !== null) {
        this.eventLoaded = (
          <article className="eventDetail">
          <h1>{this.actualEvent.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, nesciunt modi! Voluptatibus quos nemo maiores voluptas beatae accusantium ipsam qui. Alias officia iste tenetur eius? Illo earum obcaecati sed, minima doloremque ipsam reiciendis aspernatur voluptates culpa fugiat amet voluptas praesentium ea deserunt maxime debitis facere enim ipsa doloribus fugit eveniet at nemo molestiae non! Ducimus, veniam. Accusantium dicta, repellendus praesentium expedita animi consequuntur placeat voluptates vero perspiciatis enim, tempore eius quis error soluta numquam provident necessitatibus maxime dolores aperiam eligendi excepturi explicabo nesciunt? Saepe sapiente ullam repellat voluptatibus magnam facere, beatae perspiciatis dolore sit libero eius excepturi, nesciunt ab consequuntur maiores nisi, recusandae laborum doloribus. Iure maiores odit perferendis quae sit excepturi dolor non, molestias repellat at recusandae veritatis quia deserunt est doloremque! Praesentium excepturi quisquam mollitia! Mollitia tenetur minus facilis alias? Dolorum eius recusandae necessitatibus iusto quidem! Molestias, laboriosam.
          </p>
        </article>
        );
      }
    }


    return (!loading) ? this.eventLoaded : this.eventLoaded;
  };
};

// == Export
export default EventDetail;
