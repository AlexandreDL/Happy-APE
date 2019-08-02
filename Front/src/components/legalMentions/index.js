import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
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
      <Container className="mentions whitebox">
        {legalMentionsData.map(item => (
          <div className="mentions-content" key={item.id}>
            <Typography variant="h1">{item.title}</Typography>
            <Typography variant="body1">{item.content}</Typography>
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
