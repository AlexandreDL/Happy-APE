import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import './legalMentions.scss';


class legalMentions extends React.Component {
  componentWillMount() {
    const { setLegalMentionsData } = this.props;
    setLegalMentionsData();
  }

  render() {
    const { legalMentionsData } = this.props;

    return (
      <Container className="mentions">
        {legalMentionsData.map(item => (
          <div className="mentions-content" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))
          }
      </Container>
    );
  }
}

export default legalMentions;

legalMentions.propTypes = {
  legalMentionsData: PropTypes.array.isRequired,
  setLegalMentionsData: PropTypes.func.isRequired,
};
